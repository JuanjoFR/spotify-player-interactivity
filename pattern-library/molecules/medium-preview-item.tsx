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

function MediumPreviewItem({ data, style, onPress }: ComponentProps) {
  const { spacing, thumbnail, pressedOpacity } = useTheme() as Theme;

  return (
    <Pressable onPress={() => onPress(data)} style={style}>
      {({ pressed }) => (
        <View
          style={[
            {
              width: thumbnail.m
            },
            pressed ? { opacity: pressedOpacity } : null
          ]}>
          <Image
            source={data.image}
            style={{
              width: thumbnail.m,
              height: thumbnail.m,
              marginBottom: spacing.m
            }}
          />
          <Label variant="m3" numberOfLines={2}>
            {data.name}
          </Label>
        </View>
      )}
    </Pressable>
  );
}

export default MediumPreviewItem;
