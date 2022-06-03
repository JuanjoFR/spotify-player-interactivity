import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  safeArea: { flex: 1 }
});

function Search() {
  return (
    <SafeAreaView edges={["right", "left"]} style={styles.safeArea}>
      <Text>Search</Text>
    </SafeAreaView>
  );
}

export default Search;
