import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Label from "../atoms/label";
import { Theme } from "../types";

interface ComponentProps {
  duration: string;
  style: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  progressBar: {
    width: "100%",
    height: 4,
    borderRadius: 2
  },
  progressDot: {
    position: "absolute",
    width: 12,
    height: 12,
    borderRadius: 6,
    top: -4
  },
  durations: { flexDirection: "row", justifyContent: "space-between" }
});

function ProgressBar({ duration, style }: ComponentProps) {
  const { spacing, colors } = useTheme() as Theme;

  return (
    <View style={[style]}>
      <View
        style={[
          styles.progressBar,
          {
            backgroundColor: colors.progressBackground,
            marginBottom: spacing.m
          }
        ]}
      />
      <View
        style={[
          styles.progressDot,
          {
            backgroundColor: colors.text
          }
        ]}
      />
      <View style={styles.durations}>
        <Label variant="s2">0:00</Label>
        <Label variant="s2">{duration}</Label>
      </View>
    </View>
  );
}

export default ProgressBar;
