import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function TopMenus({
  handleWriteStatus,
}: {
  handleWriteStatus: any;
}) {
  const changeWriteStatus = () => {
        handleWriteStatus();
  };

  const changeConfigStatus = () => {
    console.log('list');
  };
  return (
    //새로운 메뉴 바가 필요해!
    <View style={styles.menuBar}>
      <TouchableOpacity onPress={changeConfigStatus}>
        <FontAwesome
          style={{ backgroundColor: "white" }}
          name="list-ul"
          size={30}
          color="black"
        />
      </TouchableOpacity>
      <Text style={styles.workState}>모든 메모</Text>
      <TouchableOpacity onPress={changeWriteStatus}>
        <FontAwesome
          style={styles.writeButton}
          name="pencil-square-o"
          size={30}
          color="black"
        />
      </TouchableOpacity>
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
