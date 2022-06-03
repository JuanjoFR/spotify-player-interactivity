import * as React from "react";
import { ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../atoms/title";

function Home() {
  return (
    <ScrollView>
      <SafeAreaView edges={["top", "right", "left"]}>
        <StatusBar barStyle="light-content" />
        <Title>Good afternoon</Title>
      </SafeAreaView>
    </ScrollView>
  );
}

export default Home;
