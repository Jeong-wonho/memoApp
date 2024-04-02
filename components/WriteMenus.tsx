import { View, StyleSheet, Text } from "react-native";
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
  return (
    <View style={styles.menuBar}>
      <MaterialIcons
        name="keyboard-arrow-left"
        size={30}
        color="black"
        onPress={changeWriteStatus}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          flex: 0.7,
        }}
      >
        <MaterialCommunityIcons
          name="information-outline"
          size={30}
          color="black"
          style={{paddingHorizontal:'5%'}}
        />
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={30}
          color="black"
        />
        {/* <MaterialIcons name="keyboard-hide" size={30} color="black" /> */}
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
