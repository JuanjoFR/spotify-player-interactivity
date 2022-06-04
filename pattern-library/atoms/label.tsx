import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { Text, TextStyle } from "react-native";
import { Theme } from "../types";

interface ComponentProps {
  style?: TextStyle;
  children: string;
}

function Label({ style, children }: ComponentProps) {
  const { colors } = useTheme() as Theme;

  return <Text style={[{ color: colors.text }, style]}>{children}</Text>;
}

export default Label;
