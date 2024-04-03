import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TopMenus from "../components/TopMenus";
import WriteMenus from "../components/WriteMenus";
import SearchBar from "../components/SearchBar";
import MemoList from "../components/MemoList";
import MemoWrites from "../components/MemoWrites";

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
  const [writeStatus, setWriteStatus] = useState<boolean>(true);
  const [configStatus, setConfigStatus] = useState<boolean>(false);
  const { memo } = route.params;

  console.log(memo);
  const backToHome = () => {
    navigation.navigate("MemoListScreen");
  };
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#fff", flex: 0 }}>
        <WriteMenus />
      </View>
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
