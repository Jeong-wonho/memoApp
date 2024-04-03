import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  Ionicons,
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

export default function WriteMenus({
  handleWriteStatus,
  writeStatus,
}: {
  handleWriteStatus: any;
  writeStatus: boolean;
}) {
  const changeWriteStatus = () => {
    handleWriteStatus();
  };
  const deleteCard = () => {
    console.log("deleteCard");
  };
  const InfoCard = () => {
    console.log("infomation");
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
        <TouchableOpacity onPress={InfoCard}>
          <MaterialCommunityIcons
            name="information-outline"
            size={30}
            color="black"
            // style={{ paddingHorizontal: "5%" }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={deleteCard}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={30}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteCard}>
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
