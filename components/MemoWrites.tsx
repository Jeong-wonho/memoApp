import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import {
  RichText,
  Toolbar,
  useEditorContent
} from "@10play/tentap-editor";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";


export default function MemoWrites({editor}:{editor:any}) {
  const route = useRoute();
  const [initialContent, setInitialContent] = useState<string>("");
  const { top } = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const headerHeight = isLandscape ? 32 : 44;
  const keyboardVerticalOffset = headerHeight + top;

  const { memo }: any = route.params;

  const content = useEditorContent(editor, { type: 'html'});
  console.log(content);

  useEffect(() => {
    //  title의 저장이 어떻게 되는지 알아야 적용할 수 있을거 같다.
    //  webview전체가 하나의 파일로 저장이 된다면, 미리보기에서 문제가 많이 생기고
    //  본문 부분도 문제가 생길 가능성이 다분하다.
      
      // content && onSave(content);
  }, [initialContent]);


  console.log("MemoWrites", memo);

  return (
    <>
      
      <SafeAreaView style={exampleStyles.fullScreen}>
        <RichText editor={editor} style={{ marginHorizontal: 5 }} />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={exampleStyles.keyboardAvoidingView}
          keyboardVerticalOffset={keyboardVerticalOffset}
        >
          <Toolbar editor={editor} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
    
  );
}

const exampleStyles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    marginHorizontal: 5,
  },
  keyboardAvoidingView: {
    position: "absolute",
    width: "100%",
    bottom: "31%",
  },
});
