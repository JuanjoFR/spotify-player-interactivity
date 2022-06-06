import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Label from "../atoms/label";
import { Theme } from "../types";

const styles = StyleSheet.create({
  tabBarContainer: { flexDirection: "row" },
  tabContainer: { flex: 1, alignItems: "center" }
});

function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { colors, iconSize } = useTheme() as Theme;

  return (
    <SafeAreaView
      edges={["bottom"]}
      style={[{ backgroundColor: colors.background }, styles.tabBarContainer]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title !== undefined ? options.title : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate(route.name, { merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key
          });
        };

        return (
          <Pressable
            key={index.toString()}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabContainer}>
            {options.tabBarIcon
              ? options.tabBarIcon({
                  focused: isFocused,
                  color: isFocused ? colors.text : colors.textLight,
                  size: iconSize.m
                })
              : undefined}
            <Label
              variant="s"
              style={!isFocused ? { color: colors.textLight } : undefined}>
              {label}
            </Label>
          </Pressable>
        );
      })}
    </SafeAreaView>
  );
}

export default TabBar;