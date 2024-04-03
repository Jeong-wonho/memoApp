import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TopMenus from "../components/TopMenus";
import WriteMenus from "../components/WriteMenus";
import SearchBar from "../components/SearchBar";
import MemoList from "../components/MemoList";
import MemoWrites from "../components/MemoWrites";

//dummy data;
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam quo est nostrum! Magni quod, eveniet praesentium itaque labore doloribus aspernatur mollitia nesciunt a sunt enim minus! Rerum suscipit possimus repudiandae.",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, blanditiis.",
  },
];

interface Memo {
  id: number;
  title: string;
  description: string;
}

interface Props {
  navigation: any; // navigation prop 타입 정의
}

const MemoListScreen:React.FC<Props> = ({navigation}) => {
  const [writeStatus, setWriteStatus] = useState<boolean>(true);
  const [configStatus, setConfigStatus] = useState<boolean>(false);

  

  const handleWriteStatus = (memo: Memo): void => {
    navigation.navigate("MemoScreen", { memo });
  };

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#fff", flex: 1 }}>
        <TopMenus
          handleWriteStatus={handleWriteStatus}
          writeStatus={writeStatus}
        />
        <SearchBar />
      </View>
      <View style={styles.memoList}>
        <MemoList data={DATA} />
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
