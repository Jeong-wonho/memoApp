import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import {
  RichText,
  Toolbar,
  useEditorContent,
  useEditorBridge,
  TenTapStartKit,
} from "@10play/tentap-editor";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import dataBase from "../db/data";
import "react-native-get-random-values";

import { v4 as uuidv4 } from "uuid";

interface Memo {
  id: string;
  content: string | undefined;
}

export default function MemoWrites() {
  const route = useRoute();
  // const [datas, setDatas] = useState<Memo[]>(dataBase);
  const [initialContent, setInitialContent] = useState<string>("");
  const { top } = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const headerHeight = isLandscape ? 32 : 44;
  const keyboardVerticalOffset = headerHeight + top;

  const { memo }: any = route.params;

  const navigation = useNavigation();

  const editor = useEditorBridge({
    autofocus: true,
    avoidIosKeyboard: true,
    initialContent,
    bridgeExtensions: [...TenTapStartKit],
  });

  const content = useEditorContent(editor, { type: "html" });
  console.log("memo", memo);
  const changeWriteStatus = () => {
    navigation.goBack();
  };

  useEffect(() => {
    //  title의 저장이 어떻게 되는지 알아야 적용할 수 있을거 같다.
    //  webview전체가 하나의 파일로 저장이 된다면, 미리보기에서 문제가 많이 생기고
    //  본문 부분도 문제가 생길 가능성이 다분하다.
    if (memo && memo !== undefined) {
      setInitialContent(memo.content);
    }

    if (!memo) {
      onCreate();
    } else {
      onUpdate(memo.id, { content });
    }
    // content && onSave(content);
  }, []);

  console.log("database", dataBase);

  const onCreate = () => {
    const newMemo: Memo = {
      id: uuidv4(),
      content,
    };
    // setDatas(datas.concat(newMemo));
    console.log("oncrate", newMemo);
    dataBase.push(newMemo);
  };

  // data remove function
  const onRemove = (id: string) => {
    dataBase.map((data) => data.id !== id);
    navigation.goBack();
  };

  // data update function
  const onUpdate = (id: string, newData: Partial<Memo>) => {
    console.log("newData", newData);
    dataBase.map((data) => (data.id === id ? { ...data, ...newData } : data));
  };

  const blurWebView = () => {
    editor.webviewRef.current?.injectJavaScript(
      `document.activeElement.blur();`
    );
  };

  const happy = () => {
    if (!memo) {
      console.log("onCreate");
      onCreate();
    } else {
      console.log("onUpdate");
      onUpdate(memo.id, { content });
    }
  };
  const onTrash = () => {
    console.log("삭제");
    onRemove(memo.id);
  };

  return (
    <>
      <View style={styles.menuBar}>
        <TouchableOpacity onPress={changeWriteStatus}>
          <MaterialIcons name="keyboard-arrow-left" size={30} color="black" />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 0.4,
          }}
        >
          <TouchableOpacity onPress={onTrash}>
            <MaterialCommunityIcons
              name="trash-can-outline"
              size={30}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={happy}>
            <MaterialIcons name="save-alt" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={blurWebView}>
            <MaterialIcons name="keyboard-hide" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView style={styles.fullScreen}>
        <RichText editor={editor} style={{ marginHorizontal: 5 }} />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardAvoidingView}
          keyboardVerticalOffset={keyboardVerticalOffset}
        >
          <Toolbar editor={editor} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    marginHorizontal: 5,
  },
  menuBar: {
    flexDirection: "row",
    marginTop: "20%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  keyboardAvoidingView: {
    position: "absolute",
    width: "100%",
    bottom: "31%",
  },
});
