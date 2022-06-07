import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Label from "../atoms/label";
import { MiniPlayer as IMiniPlayer, Theme } from "../types";
import MiniPlayer from "./mini-player";

interface ComponentProps extends BottomTabBarProps {
  data: IMiniPlayer;
  onMiniPlayerDevicePress: () => void;
  onMiniPlayerPlayPress: () => void;
}

const styles = StyleSheet.create({
  playersContainer: {
    // backgroundColor: "tomato",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  tabBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    transform: [{ translateY: 0 }]
  },
  tabBar: { flexDirection: "row" },
  tabWrapper: { flex: 1 },
  tab: { alignItems: "center" }
});
const SNAP_BOTTOM = 561;

function TabBar({
  state,
  descriptors,
  navigation,
  data,
  onMiniPlayerDevicePress,
  onMiniPlayerPlayPress
}: ComponentProps) {
  const { colors, iconSize, pressedOpacity, spacing } = useTheme() as Theme;

  return (
    <React.Fragment>
      <View
        style={[
          styles.playersContainer,
          {
            transform: [{ translateY: SNAP_BOTTOM }]
          }
        ]}>
        <MiniPlayer
          data={data}
          onDevicePress={onMiniPlayerDevicePress}
          onPlayPress={onMiniPlayerPlayPress}
        />
      </View>
      <View
        style={[
          styles.tabBarContainer,
          {
            backgroundColor: colors.background,
            paddingVertical: spacing.s
          }
        ]}>
        <SafeAreaView edges={["bottom"]} style={styles.tabBar}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.title !== undefined ? options.title : route.name;

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
                style={styles.tabWrapper}>
                {({ pressed }) => (
                  <View
                    style={[
                      styles.tab,
                      pressed ? { opacity: pressedOpacity } : null
                    ]}>
                    {options.tabBarIcon
                      ? options.tabBarIcon({
                          focused: isFocused,
                          color: isFocused ? colors.text : colors.textLight,
                          size: iconSize.m
                        })
                      : undefined}
                    <Label
                      variant="s"
                      style={
                        !isFocused ? { color: colors.textLight } : undefined
                      }>
                      {label}
                    </Label>
                  </View>
                )}
              </Pressable>
            );
          })}
        </SafeAreaView>
      </View>
    </React.Fragment>
  );
}

export default TabBar;
