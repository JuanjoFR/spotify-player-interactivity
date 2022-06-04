import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Label from "../atoms/label";
import { Theme } from "../types";

const styles = StyleSheet.create({
  tabBarContainer: { flexDirection: "row" },
  tabContainer: { flex: 1, alignItems: "center" }
});

function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { colors } = useTheme() as Theme;

  return (
    <View
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
                  color: isFocused ? colors.primary : colors.text,
                  size: 24
                })
              : undefined}
            <Label style={{ color: isFocused ? colors.primary : colors.text }}>
              {label}
            </Label>
          </Pressable>
        );
      })}
    </View>
  );
}

export default TabBar;
