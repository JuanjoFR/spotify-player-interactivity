import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import Label from "../atoms/label";
import { MostPlayed, Theme } from "../types";

interface ComponentProps {
  data: MostPlayed[];
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

function LargePreviewList({ data }: ComponentProps) {
  const { spacing, thumbnail, radius, pressedOpacity } = useTheme() as Theme;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      {data.map((item, index) => (
        <Pressable
          key={item.id}
          style={[
            {
              borderRadius: radius.m
            },
            index < data.length - 1 ? { marginRight: spacing.l } : null
          ]}>
          {({ pressed }) => (
            <View
              style={[
                {
                  width: thumbnail.m,
                  borderRadius: radius.m
                },
                pressed ? { opacity: pressedOpacity } : null
              ]}>
              <Image
                source={item.image}
                style={{
                  width: thumbnail.m,
                  height: thumbnail.m,
                  borderRadius: radius.m,
                  marginBottom: spacing.m
                }}
              />
              <Label variant="m2" numberOfLines={2}>
                {item.name}
              </Label>
            </View>
          )}
        </Pressable>
      ))}
    </ScrollView>
  );
}

export default LargePreviewList;