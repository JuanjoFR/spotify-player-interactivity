import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: { backgroundColor: "brown", flex: 1 }
});

function Player() {
  return (
    <View style={styles.container}>
      <Text>player</Text>
    </View>
  );
}

export default Player;
