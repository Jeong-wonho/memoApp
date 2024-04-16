import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import dataBase from "../db/data";
import { useEditorContent } from "@10play/tentap-editor";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

interface Memo {
  id: string;
  content: string | undefined;
}

export default function WriteMenus({ editor }: { editor: any }) {
  const navigation = useNavigation();

  const changeWriteStatus = () => {
    navigation.goBack();
  };

  const [datas, setDatas] = useState<Memo[]>(dataBase);

  const onCreate = (content: string | undefined) => {
    const newMemo = {
      id: uuidv4(),
      content,
    };
    console.log("newMemo", newMemo);
    setDatas(datas.concat(newMemo));
  };

  // data remove function
  const onRemove = (id: string) => {
    setDatas(datas.filter((data) => data.id !== id));
  };

  // data update function
  const onUpdate = (id: string, newData: Partial<Memo>) => {
    setDatas((datas) =>
      datas.map((data) => (data.id === id ? { ...data, ...newData } : data))
    );
  };

  const happy = () => {
    console.log('today is happy');
  }

  const blurWebView = () => {
    editor.webviewRef.current?.injectJavaScript(
      `document.activeElement.blur();`
    );
  };

  return (
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
        <TouchableOpacity onPress={happy}>
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
  );
}
const styles = StyleSheet.create({
  menuBar: {
    flexDirection: "row",
    marginTop: "20%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});
