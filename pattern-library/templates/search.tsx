import * as React from "react";
import { StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Search() {
  return (
    <SafeAreaView edges={["top", "right", "left"]}>
      <StatusBar barStyle="light-content" />
      <Text>Search</Text>
    </SafeAreaView>
  );
}

export default Search;
