import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Title from "../atoms/title";
import { Theme } from "../types";

interface ComponentProps {
  text: string;
  style: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

function SectionHeader({ text, style }: ComponentProps) {
  const { pressableSize, spacing } = useTheme() as Theme;

  return (
    <View
      style={[
        style,
        { height: pressableSize.m, marginBottom: spacing.m },
        styles.container
      ]}>
      <Title>{text}</Title>
    </View>
  );
}

export default SectionHeader;
