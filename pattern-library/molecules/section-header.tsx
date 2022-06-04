import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Title from "../atoms/title";
import { Theme } from "../types";

interface ComponentProps {
  text: string;
  onNotificationsPress: () => void;
  onRecentlyPlayedPress: () => void;
  onSettingsPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  icons: {
    flexDirection: "row"
  },
  pressableIcon: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center"
  },
  iconPressed: {
    opacity: 0.7
  }
});

function SectionHeader({
  text,
  onNotificationsPress,
  onRecentlyPlayedPress,
  onSettingsPress
}: ComponentProps) {
  const { colors, spacing } = useTheme() as Theme;

  return (
    <View style={[styles.container, { marginBottom: spacing.m }]}>
      <Title>{text}</Title>
      <View style={styles.icons}>
        <Pressable style={styles.pressableIcon} onPress={onNotificationsPress}>
          {({ pressed }) => (
            <Ionicons
              name="notifications-outline"
              color={colors.text}
              size={24}
              style={pressed ? styles.iconPressed : null}
            />
          )}
        </Pressable>
        <Pressable style={styles.pressableIcon} onPress={onRecentlyPlayedPress}>
          {({ pressed }) => (
            <Ionicons
              name="time-outline"
              color={colors.text}
              size={24}
              style={pressed ? styles.iconPressed : null}
            />
          )}
        </Pressable>
        <Pressable style={styles.pressableIcon} onPress={onSettingsPress}>
          {({ pressed }) => (
            <Ionicons
              name="settings-outline"
              color={colors.text}
              size={24}
              style={pressed ? styles.iconPressed : null}
            />
          )}
        </Pressable>
      </View>
    </View>
  );
}

export default SectionHeader;
