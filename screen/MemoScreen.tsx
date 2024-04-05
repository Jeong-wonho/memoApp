import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import WriteMenus from "../components/WriteMenus";
import MemoWrites from "../components/MemoWrites";
import { useEditorBridge, TenTapStartKit } from "@10play/tentap-editor";
import { useRoute } from "@react-navigation/native";

interface Memo {
  title: string;
  description: string;
}

interface Props {
  route: any;
}
interface Props {
  navigation: any;
}

const MemoScreen: React.FC<Props> = ({ navigation, route }) => {
  const { memo } = route.params;
  const [initialContent, setInitialContent] = useState<string>("");

  useEffect(() => {
    if (memo&&memo!==undefined) {
      setInitialContent(
        `<h1>${memo.title}</h1> <br/><p> ${memo.description}</p>`
      );
    }
  }, [initialContent]);

  const editor = useEditorBridge({
    autofocus: true,
    avoidIosKeyboard: true,
    initialContent,
    bridgeExtensions: [...TenTapStartKit],
  });

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#fff", flex: 0 }}>
        <WriteMenus editor={editor} />
      </View>
      <View style={styles.memoList}>
        <MemoWrites editor={editor} />
      </View>
    </View>
  );
};

export default MemoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignContent: "space-between",
  },
  menu: {
    backgroundColor: "#fff",
  },
  memoList: {
    flex: 3.5,
    backgroundColor: "#fff",
  },
});
