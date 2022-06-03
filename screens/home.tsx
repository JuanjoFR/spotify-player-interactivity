import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "skyblue" }
});

function Home() {
  return (
    <SafeAreaView
      edges={["top", "right", "bottom", "left"]}
      style={styles.safeArea}>
      <Text>Hello world</Text>
    </SafeAreaView>
  );
}

export default Home;
