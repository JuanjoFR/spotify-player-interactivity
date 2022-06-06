import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { Theme } from "../types";

interface ComponentProps {
  children: string;
}

const styles = StyleSheet.create({
  text: {}
});

function Title({ children }: ComponentProps) {
  const { text } = useTheme() as Theme;

  return <Text style={[text.title, styles.text]}>{children}</Text>;
}

export default Title;