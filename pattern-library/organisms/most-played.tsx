import * as React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import MiniPreviewList from "../molecules/mini-preview-list";
import SectionHeader from "../molecules/section-header";
import { MostPlayed as IMostPlayed } from "../types";

interface ComponentProps {
  headerText: string;
  data: IMostPlayed[];
  containerStyle: ViewStyle;
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
  return (
    <View style={containerStyle}>
      <SectionHeader
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
