import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import MiniPreviewList from "../molecules/mini-preview-list";
import SectionHeaderWithActions from "../molecules/section-header-with-actions";
import { MostPlayed as IMostPlayed, Theme } from "../types";

interface ComponentProps {
  headerText: string;
  data: IMostPlayed[];
  containerStyle: StyleProp<ViewStyle>;
  listStyle: StyleProp<ViewStyle>;
  onNotificationsPress: () => void;
  onRecentlyPlayedPress: () => void;
  onSettingsPress: () => void;
}

function MostPlayed({
  headerText,
  data,
  containerStyle,
  listStyle,
  onNotificationsPress,
  onRecentlyPlayedPress,
  onSettingsPress
}: ComponentProps) {
  const { spacing } = useTheme() as Theme;

  return (
    <View style={[{ marginBottom: spacing.m }, containerStyle]}>
      <SectionHeaderWithActions
        text={headerText}
        onNotificationsPress={onNotificationsPress}
        onRecentlyPlayedPress={onRecentlyPlayedPress}
        onSettingsPress={onSettingsPress}
      />
      <MiniPreviewList data={data} style={listStyle} />
    </View>
  );
}

export default MostPlayed;
