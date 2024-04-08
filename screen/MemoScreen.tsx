import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import WriteMenus from "../components/WriteMenus";
import MemoWrites from "../components/MemoWrites";
import { useRoute } from "@react-navigation/native";


interface Props {
  route: any;
}
interface Props {
  navigation: any;
}

const MemoScreen: React.FC<Props> = ({ navigation, route }) => {

  return (
    <View style={styles.container}>
      <View style={styles.memoList}>
        <MemoWrites />
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
