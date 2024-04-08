import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useState } from "react";
import TopMenus from "../components/TopMenus";
import SearchBar from "../components/SearchBar";
import MemoList from "../components/MemoList";
import dataBase from "../db/data";

//dummy data;

interface Memo {
  id: string;
  content: string|undefined;
}

interface Props {
  navigation: any; // navigation prop 타입 정의
}

const MemoListScreen: React.FC<Props> = ({ navigation }) => {
  // const [datas, setDatas] = useState<Memo[]>(dataBase);

  const handleWriteStatus = (memo: Memo): void => {
    navigation.navigate("MemoScreen", { memo });
  };

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#fff", flex: 1 }}>
        <TopMenus handleWriteStatus={handleWriteStatus} />
        <SearchBar />
      </View>
      <View style={styles.memoList}>
        <MemoList data={dataBase} />
      </View>
    </View>
  );
};

export default MemoListScreen;

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
