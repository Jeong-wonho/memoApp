import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

type Memo = {
  id: string;
  title: string;
  description: string;
};

type ItemProps = { item: Memo; onPress(): void };

const Item = ({ item, onPress }: ItemProps) => (
  <TouchableOpacity style={styles.itemComp} onPress={onPress}>
    <Text style={styles.itemTitle}>{item.title}</Text>
    <Text>{item.description.substring(0, 40)}</Text>
  </TouchableOpacity>
);
export default function MemoList({ data }: { data: Memo[] }) {
  const navigation = useNavigation();

  const renderItem = ({ item }: { item: Memo }) => {
    const memo = item;
    return (
      <Item
        item={item}
        onPress={() => navigation.navigate("MemoScreen", { memo })}
      />
    );
  };
  return (
    <>
      <View style={styles.itemList}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  itemList: { flex: 1, marginTop: 10 },
  itemTitle: { fontSize: 18, fontWeight: "500" },
  itemComp: {
    backgroundColor: "#fff",
    borderBottomColor: "#443",
    borderBottomWidth: 0.3,
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 16,
  },
});
