import * as React from "react";
import { View, ViewStyle } from "react-native";
import MiniPreviewList from "../molecules/mini-preview-list";
import SectionHeader from "../molecules/section-header";
import { MostPlayed as IMostPlayed } from "../types";

interface ComponentProps {
  headerText: string;
  data: IMostPlayed[];
  style: ViewStyle;
  onNotificationsPress: () => void;
  onRecentlyPlayedPress: () => void;
  onSettingsPress: () => void;
}

function MostPlayed({
  headerText,
  data,
  style,
  onNotificationsPress,
  onRecentlyPlayedPress,
  onSettingsPress
}: ComponentProps) {
  return (
    <View style={style}>
      <SectionHeader
        text={headerText}
        onNotificationsPress={onNotificationsPress}
        onRecentlyPlayedPress={onRecentlyPlayedPress}
        onSettingsPress={onSettingsPress}
      />
      <MiniPreviewList data={data} />
    </View>
  );
}

export default MostPlayed;
