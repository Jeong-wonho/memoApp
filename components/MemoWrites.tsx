import React from "react";
import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { RichText, Toolbar, useEditorBridge } from "@10play/tentap-editor";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function MemoWrites() {
  const { top } = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const headerHeight = isLandscape ? 32 : 44;
  const keyboardVerticalOffset = headerHeight + top;

  const editor = useEditorBridge({
    autofocus: true,
    avoidIosKeyboard: true,
    initialContent
  });

  return (
      <SafeAreaView style={exampleStyles.fullScreen}>
        <RichText editor={editor}/>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={exampleStyles.keyboardAvoidingView}
          keyboardVerticalOffset={keyboardVerticalOffset}
        >
          <Toolbar editor={editor} />
        </KeyboardAvoidingView>
      </SafeAreaView>
  );
}

const exampleStyles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    marginHorizontal:5
  },
  keyboardAvoidingView: {
    position: "absolute",
    width: "100%",
    bottom: 10,
  },
});

const initialContent = `안녕하세요!`;

