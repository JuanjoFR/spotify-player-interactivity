import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { Image, Pressable, StyleProp, View, ViewStyle } from "react-native";
import Label from "../atoms/label";
import { Preview, Theme } from "../types";

interface ComponentProps {
  data: Preview;
  style: StyleProp<ViewStyle>;
  onPress: (item: Preview) => void;
}

function LargePreviewItem({ data, style, onPress }: ComponentProps) {
  const { spacing, thumbnail, radius, pressedOpacity } = useTheme() as Theme;

  return (
    <Pressable
      onPress={() => onPress(data)}
      style={[
        {
          borderRadius: radius.l
        },
        style
      ]}
    >
      {({ pressed }) => (
        <View
          style={[
            {
              width: thumbnail.xl,
              borderRadius: radius.l
            },
            pressed ? { opacity: pressedOpacity } : null
          ]}
        >
          <Image
            source={data.image}
            style={{
              width: thumbnail.xl,
              height: thumbnail.xl,
              borderRadius: radius.l,
              marginBottom: spacing.m
            }}
          />
          <Label variant="m2" numberOfLines={2}>
            {data.name}
          </Label>
        </View>
      )}
    </Pressable>
  );
}

export default LargePreviewItem;
