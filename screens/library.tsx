import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "skyblue" }
});

function Library() {
  return (
    <SafeAreaView
      edges={["top", "right", "bottom", "left"]}
      style={styles.safeArea}>
      <Text>Library</Text>
    </SafeAreaView>
  );
}

export default Library;
