import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { ScrollView, StyleProp, ViewStyle } from "react-native";
import { Preview, Theme } from "../types";
import MediumPreviewItem from "./medium-preview-item";

interface ComponentProps {
  data: Preview[];
  contentContainerStyle: StyleProp<ViewStyle>;
  onItemPress: (item: Preview) => void;
}

function MediumPreviewList({
  data,
  contentContainerStyle,
  onItemPress
}: ComponentProps) {
  const { spacing } = useTheme() as Theme;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={contentContainerStyle}
    >
      {data.map((item, index) => (
        <MediumPreviewItem
          key={item.id}
          data={item}
          style={[index < data.length - 1 ? { marginRight: spacing.l } : null]}
          onPress={onItemPress}
        />
      ))}
    </ScrollView>
  );
}

export default MediumPreviewList;
