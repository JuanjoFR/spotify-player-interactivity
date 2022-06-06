import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";
import { Theme } from "../types";

interface ComponentProps extends TextProps {
  variant: "s" | "m1" | "m2";
  style?: StyleProp<TextStyle>;
  children: string;
}

function Label({ variant, style, children, ...rest }: ComponentProps) {
  const { text } = useTheme() as Theme;

  return (
    <Text {...rest} style={[text.label[variant], style]}>
      {children}
    </Text>
  );
}

export default Label;
