import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

type Memo = {
  id: string;
  content: string | undefined;
};

type ItemProps = { item: Memo; onPress(): void };

//구분하는 함수!!

const Item = ({ item, onPress }: ItemProps) => {
  const parseHtmlString = useCallback(
    ({ content }: { content: string | undefined }) => {
      if (!content) {
        // content가 undefined인 경우 처리
        return { title: "", description: "" };
      }
      // 정규식 패턴 설정
      const tagRegex = /(?<=<[^>]+>)[^<]+(?=<\/[^>]+>)/g;
      // 문자열에서 태그 제거
      const strippedContent = content?.match(tagRegex);

      // 첫 번째 줄을 제목으로, 나머지를 설명으로 분리
      console.log("strippedContent", strippedContent);
      const title = strippedContent?.[0] || "";
      const description = strippedContent?.slice(1).join("\n") || "";

      return { title, description };
    },
    [item]
  );

  const { title, description } = parseHtmlString({ content: item.content });
  return (
    <TouchableOpacity style={styles.itemComp} onPress={onPress}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text>{description}</Text>
    </TouchableOpacity>
  );
};
const navigation = useNavigation();

export default function MemoList({
  data,
  onUpdate,
  onRemove,
}: {
  data: Memo[];
  onUpdate(id: string, content: Partial<Memo>): void;
  onRemove(id: string): void;
}) {
  

  const renderItem = ({ item }: { item: Memo }) => {
    const memo = item;
    return (
      <Item
        item={item}
        onPress={() =>
          navigation.navigate("MemoScreen", { memo, onUpdate, onRemove })
        }
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
