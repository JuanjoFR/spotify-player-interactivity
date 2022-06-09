import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Title from "../atoms/title";
import { Theme } from "../types";

interface ComponentProps {
  title: string;
  onClosePress: () => void;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  icon: {
    alignItems: "center",
    justifyContent: "center"
  }
});

function PageHeader({ title, onClosePress }: ComponentProps) {
  const { colors, iconSize, pressableSize, pressedOpacity } =
    useTheme() as Theme;

  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.icon,
          {
            width: pressableSize.m,
            height: pressableSize.m
          }
        ]}
        onPress={onClosePress}
      >
        {({ pressed }) => (
          <Ionicons
            name="chevron-down-outline"
            color={colors.text}
            size={iconSize.m}
            style={pressed ? { opacity: pressedOpacity } : null}
          />
        )}
      </Pressable>
      <Title variant="s">{title}</Title>
      <Pressable
        style={[
          styles.icon,
          {
            width: pressableSize.m,
            height: pressableSize.m
          }
        ]}
        onPress={onClosePress}
      >
        {({ pressed }) => (
          <Ionicons
            name="ellipsis-horizontal"
            color={colors.text}
            size={iconSize.m}
            style={pressed ? { opacity: pressedOpacity } : null}
          />
        )}
      </Pressable>
    </View>
  );
}

export default PageHeader;
