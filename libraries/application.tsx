import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "../screens/home";

function Application() {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
}

export default Application;
