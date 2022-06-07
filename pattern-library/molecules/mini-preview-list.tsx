import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import MiniPreviewItem from "../molecules/mini-preview-item";
import { Preview, Theme } from "../types";

interface ComponentProps {
  data: Preview[];
  style: StyleProp<ViewStyle>;
  onItemPress: (item: Preview) => void;
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  item: {
    width: "50%"
  }
});

function MiniPreviewList({ data, style, onItemPress }: ComponentProps) {
  const { spacing } = useTheme() as Theme;

  return (
    <View style={[styles.container, style]}>
      {data.map((item, index) => (
        <View
          key={item.id}
          style={[
            styles.item,
            index % 2 ? { paddingLeft: spacing.m / 2 } : null,
            !(index % 2) ? { paddingRight: spacing.m / 2 } : null,
            { marginBottom: spacing.m }
          ]}>
          <MiniPreviewItem key={item.id} data={item} onPress={onItemPress} />
        </View>
      ))}
    </View>
  );
}

export default MiniPreviewList;
