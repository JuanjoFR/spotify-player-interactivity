import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import Title from "../atoms/title";
import { Theme } from "../types";
import SectionActions from "./section-actions";

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
  }
});

function SectionHeaderWithActions({
  text,
  onNotificationsPress,
  onRecentlyPlayedPress,
  onSettingsPress
}: ComponentProps) {
  const { pressableSize, spacing } = useTheme() as Theme;

  return (
    <View
      style={[
        { height: pressableSize.m, marginBottom: spacing.m },
        styles.container
      ]}
    >
      <Title variant="m">{text}</Title>
      <SectionActions
        config={[
          { iconName: "notifications-outline", action: onNotificationsPress },
          { iconName: "time-outline", action: onRecentlyPlayedPress },
          { iconName: "settings-outline", action: onSettingsPress }
        ]}
      />
    </View>
  );
}

export default SectionHeaderWithActions;
