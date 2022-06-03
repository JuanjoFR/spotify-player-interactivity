import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { Theme } from "../themes/types";

interface ComponentProps {
  children: string;
}

const styles = StyleSheet.create({
  text: {}
});

function Title({ children }: ComponentProps) {
  const { colors } = useTheme() as Theme;

  return <Text style={[{ color: colors.text }, styles.text]}>{children}</Text>;
}

export default Title;
