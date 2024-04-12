import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useState } from "react";
import TopMenus from "../components/TopMenus";
import SearchBar from "../components/SearchBar";
import MemoList from "../components/MemoList";
import dataBase from "../db/data";
import { v4 as uuidv4 } from "uuid";


//dummy data;

interface Memo {
  id: string;
  content: string | undefined;
}

interface Props {
  navigation: any; // navigation prop 타입 정의
}

const MemoListScreen: React.FC<Props> = ({ navigation }) => {
  const [datas, setDatas] = useState<Memo[]>(dataBase);

  const onCreate = useCallback(
    (content: string|undefined) => {
      const newMemo = {
        id: uuidv4(),
        content,
      };
      setDatas(datas.concat(newMemo));
    },
    [datas]
  );
  // data remove function
  const onRemove = useCallback(
    (id: string) => {
      setDatas(datas.filter((data) => data.id !== id));
    },
    [datas]
  );
    
  // data update function
  const onUpdate = useCallback((id: string, newData: Partial<Memo>) => {
    setDatas((prevDatas) =>
      prevDatas.map((data) => (data.id === id ? { ...data, ...newData } : data))
    );
  }, [datas]);

  const handleWriteStatus = (data: Memo): void => {
    navigation.navigate("MemoScreen", { data, onCreate});
  };

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#fff", flex: 1 }}>
        <TopMenus handleWriteStatus={handleWriteStatus} />
        <SearchBar />
      </View>
      <View style={styles.memoList}>
        <MemoList data={datas} onUpdate={onUpdate} onRemove={onRemove}/>
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
