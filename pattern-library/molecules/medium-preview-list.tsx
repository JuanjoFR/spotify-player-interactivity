import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import Label from "../atoms/label";
import { Preview, Theme } from "../types";

interface ComponentProps {
  data: Preview[];
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

function MediumPreviewList({ data }: ComponentProps) {
  const { spacing, thumbnail, pressedOpacity } = useTheme() as Theme;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      {data.map((item, index) => (
        <Pressable
          key={item.id}
          style={[index < data.length - 1 ? { marginRight: spacing.l } : null]}>
          {({ pressed }) => (
            <View
              style={[
                {
                  width: thumbnail.m
                },
                pressed ? { opacity: pressedOpacity } : null
              ]}>
              <Image
                source={item.image}
                style={{
                  width: thumbnail.m,
                  height: thumbnail.m,
                  marginBottom: spacing.m
                }}
              />
              <Label variant="m3" numberOfLines={2}>
                {item.name}
              </Label>
            </View>
          )}
        </Pressable>
      ))}
    </ScrollView>
  );
}

export default MediumPreviewList;
