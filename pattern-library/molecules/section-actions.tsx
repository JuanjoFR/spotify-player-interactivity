import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Theme } from "../types";

interface Item {
  iconName: string;
  action: () => void;
}

interface ComponentProps {
  config: Item[];
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  pressableIcon: {
    alignItems: "center",
    justifyContent: "center"
  }
});

function SectionActions({ config }: ComponentProps) {
  const { colors, iconSize, pressableSize, pressedOpacity } =
    useTheme() as Theme;

  return (
    <View style={styles.container}>
      {config.map((item: Item) => (
        <Pressable
          key={item.iconName}
          style={[{ width: pressableSize.m }, styles.pressableIcon]}
          onPress={item.action}
        >
          {({ pressed }) => (
            <Ionicons
              name={item.iconName}
              color={colors.text}
              size={iconSize.m}
              style={pressed ? { opacity: pressedOpacity } : null}
            />
          )}
        </Pressable>
      ))}
    </View>
  );
}

export default SectionActions;
