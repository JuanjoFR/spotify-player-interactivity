import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";
import { Theme } from "../types";

interface ComponentProps extends TextProps {
  variant: "s" | "m";
  style?: StyleProp<TextStyle>;
  children: string;
}

function Title({ variant, style, children, ...rest }: ComponentProps) {
  const { text } = useTheme() as Theme;

  return (
    <Text {...rest} style={[text.title[variant], style]}>
      {children}
    </Text>
  );
}

export default Title;
