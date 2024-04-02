import { TextInput, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

export default function SearchBar() {
  const [text, onChangeText] = useState<string>();
  //   const [isFocused, setIsFocused] = useState(false);
  //     const handleFocus = () => {
  //         setIsFocused(true);
  //       };
  //       const handleBlur = () => {
  //         setIsFocused(false);
  //       };
  return (
    <>
      <View
        style={styles.searchBar}
      >
        <FontAwesome
          name="search"
          size={20}
          color="black"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          onChangeText={onChangeText}
          value={text}
          placeholder="tag 또는 검색어 입력"
          placeholderTextColor="#424242"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
    margin: '5%',
    flex: 1,
    justifyContent: "center",
    backgroundColor: "lightgrey",
    borderRadius: 10,
    marginHorizontal:14,
  },
  searchIcon: { padding: 10 },
  searchInput: {
    padding: 10,
    backgroundColor: "lightgrey",
    height: "90%",
    borderRadius: 5,
    borderWidth: 0,
    flex: 1,
    fontSize: 20,
  },
});
