import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigator from "../navigators/application";
import Theme from "../pattern-library/theme";

const styles = StyleSheet.create({
  gestureHandler: { flex: 1 }
});

function Application() {
  return (
    <GestureHandlerRootView style={styles.gestureHandler}>
      <SafeAreaProvider>
        <NavigationContainer theme={Theme}>
          <Navigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default Application;
