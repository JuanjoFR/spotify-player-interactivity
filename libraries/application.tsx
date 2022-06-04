import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigator from "../navigators/application";
import Theme from "../pattern-library/theme";

function Application() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={Theme}>
        <Navigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Application;
