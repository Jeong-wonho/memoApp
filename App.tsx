import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import TopMenus from "./components/TopMenus";
import SearchBar from "./components/SearchBar";
import MemoList from "./components/MemoList";
import { useState } from "react";
import WriteMenus from "./components/WriteMenus";
import MemoWrites from "./components/MemoWrites";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

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

export default function App() {
  const [writeStatus, setWriteStatus] = useState<boolean>(false);
  const [configStatus, setConfigStatus] = useState<boolean>(false);

  const handleWriteStatus = (): void => {
    setWriteStatus(!writeStatus);
  };

  const handleConfigStatus = (): void => {
    setConfigStatus(!configStatus);
  };

  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <View
        style={{ backgroundColor: "#fff", flex: `${writeStatus ? 1 : 0}` }}
      >
        {writeStatus ? (
          <TopMenus
            handleWriteStatus={handleWriteStatus}
            handleConfigStatus={handleConfigStatus}
            writeStatus={writeStatus}
            configStatus={configStatus}
          />
        ) : (
          <WriteMenus
            handleWriteStatus={handleWriteStatus}
            writeStatus={writeStatus}
          />
        )}
        {writeStatus ? <SearchBar /> : ""}
      </View>
      <View style={styles.memoList}>
        {writeStatus ? <MemoList data={DATA} /> : <MemoWrites />}
      </View>
    </View>
    </SafeAreaProvider>
  );
}

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
