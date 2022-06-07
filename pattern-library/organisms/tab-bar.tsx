import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
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
    justifyContent: "center",
    transform: [{ translateY: 0 }]
  },
  tabBar: { flexDirection: "row" },
  tabWrapper: { flex: 1 },
  tab: { alignItems: "center" }
});
const { height } = Dimensions.get("window");

function TabBar({
  state,
  descriptors,
  navigation,
  data,
  onMiniPlayerDevicePress,
  onMiniPlayerPlayPress
}: ComponentProps) {
  const { colors, iconSize, pressedOpacity, tabbarHeight, miniPlayerHeight } =
    useTheme() as Theme;
  const insets = useSafeAreaInsets();
  const SNAP_BOTTOM = height - tabbarHeight - miniPlayerHeight - insets.bottom;

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
            height: tabbarHeight + insets.bottom,
            backgroundColor: colors.background
          }
        ]}>
        <View style={[styles.tabBar, { marginBottom: insets.bottom }]}>
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
        </View>
      </View>
    </React.Fragment>
  );
}

export default TabBar;
