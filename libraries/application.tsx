import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigator from "../navigators/application";

function Application() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Application;
