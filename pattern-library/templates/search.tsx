import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Theme } from "../types";

function Search() {
  const { colors } = useTheme() as Theme;

  return (
    <SafeAreaView edges={["top", "right", "left"]}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <Text>Search</Text>
    </SafeAreaView>
  );
}

export default Search;
