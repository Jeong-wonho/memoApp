import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function TopMenus({
  handleWriteStatus,
  handleConfigStatus,
  writeStatus,
  configStatus,
}: {
  handleWriteStatus: any;
  handleConfigStatus: any;
  writeStatus: boolean;
  configStatus: boolean;
}) {
  const changeWriteStatus = () => {
    handleWriteStatus();
  };

  const changeConfigStatus = () => {
    handleConfigStatus();
  };
  console.log(writeStatus, configStatus);
  return (
    //새로운 메뉴 바가 필요해!
      <View style={styles.menuBar}>
        <FontAwesome
          style={{ backgroundColor: "white" }}
          name="list-ul"
          size={30}
          color="black"
          onPress={changeConfigStatus}
        />
        <Text style={styles.workState}>모든 메모</Text>
        <FontAwesome
          style={styles.writeButton}
          name="pencil-square-o"
          size={30}
          color="black"
          onPress={changeWriteStatus}
        />
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
  listButton: {
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  writeButton: {
    backgroundColor: "white",
  },
  workState: {
    alignItems: "center",
    paddingVertical: 5,
    fontSize: 18,
    fontWeight: "800",
  },
});
