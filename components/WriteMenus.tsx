import { View, StyleSheet, Text, TouchableOpacity,Keyboard } from "react-native";
import React, { useEffect } from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function WriteMenus({editor}:{editor:any}) {
  const navigation = useNavigation();
  const changeWriteStatus = () => {
    navigation.goBack();
  };
  const deleteCard = () => {
    console.log("deleteCard");
  };
  
  const blurWebView = () => {
    editor.webviewRef.current?.injectJavaScript(`document.activeElement.blur();`)
  }

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
        <TouchableOpacity onPress={deleteCard}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={30}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteCard}>
          <MaterialIcons
            name="save-alt"
            size={30}
            color="black"
          />
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
