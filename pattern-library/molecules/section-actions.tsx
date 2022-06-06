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
  },
  iconPressed: {
    opacity: 0.7
  }
});

function SectionActions({ config }: ComponentProps) {
  const { colors, iconSize, pressableSize } = useTheme() as Theme;

  return (
    <View style={styles.container}>
      {config.map((item: Item) => (
        <Pressable
          key={item.iconName}
          style={[{ width: pressableSize.m }, styles.pressableIcon]}
          onPress={item.action}>
          {({ pressed }) => (
            <Ionicons
              name={item.iconName}
              color={colors.text}
              size={iconSize.m}
              style={pressed ? styles.iconPressed : null}
            />
          )}
        </Pressable>
      ))}
      {/* <Pressable style={styles.pressableIcon} onPress={onNotificationsPress}>
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
      </Pressable> */}
    </View>
  );
}

export default SectionActions;
