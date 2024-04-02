import { FlatList, TouchableOpacity, View, Text, StyleSheet } from "react-native";

type ItemData = {
  id: string;
  title: string;
  description: string;
};

type ItemProps = { item:any ; onPress: () => void };

const Item = ({ item, onPress }: ItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.itemComp}
  >
    <Text style={styles.itemTitle}>{item.title}</Text>
    <Text>{item.description.substring(0, 40)}</Text>
  </TouchableOpacity>
);
export default function MemoList({data}:{data:ItemData[]}) {
    
  const renderItem = ({ item }: { item: ItemData }) => {
    return <Item item={item} onPress={() => console.log("FlatList")} />;
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
    itemComp : {
        backgroundColor: "#fff",
        borderBottomColor: "#443",
        borderBottomWidth: 0.3,
        padding: 5,
        marginVertical: 5,
        marginHorizontal: 16,
      }
});