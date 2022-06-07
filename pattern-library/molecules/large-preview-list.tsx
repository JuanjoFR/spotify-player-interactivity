import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { ScrollView, StyleProp, ViewStyle } from "react-native";
import { Preview, Theme } from "../types";
import LargePreviewItem from "./large-preview-item";

interface ComponentProps {
  data: Preview[];
  contentContainerStyle: StyleProp<ViewStyle>;
  onItemPress: (item: Preview) => void;
}

function LargePreviewList({
  data,
  contentContainerStyle,
  onItemPress
}: ComponentProps) {
  const { spacing } = useTheme() as Theme;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={contentContainerStyle}>
      {data.map((item, index) => (
        <LargePreviewItem
          key={item.id}
          data={item}
          style={index < data.length - 1 ? { marginRight: spacing.l } : null}
          onPress={onItemPress}
        />
      ))}
    </ScrollView>
  );
}

export default LargePreviewList;
