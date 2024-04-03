import { SafeAreaProvider } from "react-native-safe-area-context";
import Main from "./screen/MemoListScreen";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MemoListScreen from "./screen/MemoListScreen";
import MemoScreen from "./screen/MemoScreen";

const Stack = createStackNavigator();
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false, // Navigation Header 숨기기
          }}
        >
          <Stack.Screen
            name="MemoListScreen"
            component={MemoListScreen}
            options={{ title: "Memo List" }}
          />
          <Stack.Screen
            name="MemoScreen"
            component={MemoScreen}
            options={{ title: "Memo Detail" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
