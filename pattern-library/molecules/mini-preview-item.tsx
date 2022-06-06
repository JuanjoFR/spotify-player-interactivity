import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import Label from "../atoms/label";
import { MostPlayed, Theme } from "../types";

interface ComponentProps {
  data: MostPlayed;
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  label: { flexShrink: 1 }
});

function MiniPreviewItem({ data }: ComponentProps) {
  const { spacing, thumbnail, radius, colors } = useTheme() as Theme;

  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor: colors.backgroundLight,
          borderRadius: radius.s
        }
      ]}>
      <Image
        source={data.image}
        style={{
          width: thumbnail.m,
          height: thumbnail.m,
          borderTopLeftRadius: radius.s,
          borderBottomLeftRadius: radius.s,
          marginRight: spacing.m
        }}
      />
      <Label
        variant="m"
        numberOfLines={2}
        style={[styles.label, { marginRight: spacing.m }]}>
        {data.name}
      </Label>
    </Pressable>
  );
}

export default MiniPreviewItem;
