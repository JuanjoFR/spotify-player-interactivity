import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Preview, Theme } from "../types";
import MediumPreviewItem from "./medium-preview-item";

interface ComponentProps {
  data: Preview[];
  onItemPress: (item: Preview) => void;
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

function MediumPreviewList({ data, onItemPress }: ComponentProps) {
  const { spacing } = useTheme() as Theme;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
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
