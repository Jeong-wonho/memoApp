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
  content: string|undefined;
};

type ItemProps = { item: Memo; onPress(): void };

//구분하는 함수!!
const parseHtmlString = ({ content }: { content: string|undefined }) => {
    if (!content) {
        // content가 undefined인 경우 처리
        return { title: '', description: '' };
      }
    // 정규식 패턴 설정
  const titleRegex = /<h1>(.*?)<\/h1>/;
  const pRegex = /<p>(.*?)<\/p>/;

  // 문자열에서 타이틀과 본문 추출
  const titleMatch = content.match(titleRegex);
  const pMatch = content.match(pRegex);

  // 타이틀과 본문 추출
  const title = titleMatch ? titleMatch[1] : "";
  const description = pMatch ? pMatch[1] : "";

  return { title, description };
};

const Item = ({ item, onPress }: ItemProps) => {
  const { title, description } = parseHtmlString({ content: item.content });
  return (
    <TouchableOpacity style={styles.itemComp} onPress={onPress}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text>{description}</Text>
    </TouchableOpacity>
  );
};
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
  itemTitle: { fontSize: 18, fontWeight: "700" },
  itemComp: {
    backgroundColor: "#fff",
    borderBottomColor: "#443",
    borderBottomWidth: 0.3,
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 16,
  },
});
