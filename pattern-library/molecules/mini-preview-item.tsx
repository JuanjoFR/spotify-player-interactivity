import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
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
  const { spacing, thumbnail, radius, colors, pressedOpacity } =
    useTheme() as Theme;

  return (
    <Pressable
      style={{
        borderRadius: radius.s
      }}>
      {({ pressed }) => (
        <View
          style={[
            { backgroundColor: colors.backgroundLight },
            styles.container,
            pressed ? { opacity: pressedOpacity } : null
          ]}>
          <Image
            source={data.image}
            style={{
              width: thumbnail.s,
              height: thumbnail.s,
              borderTopLeftRadius: radius.s,
              borderBottomLeftRadius: radius.s,
              marginRight: spacing.m
            }}
          />
          <Label
            variant="m1"
            numberOfLines={2}
            style={[styles.label, { marginRight: spacing.m }]}>
            {data.name}
          </Label>
        </View>
      )}
    </Pressable>
  );
}

export default MiniPreviewItem;
