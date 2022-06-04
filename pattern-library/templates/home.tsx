import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MostPlayed from "../organisms/most-played";
import { MostPlayed as IMostPlayed, Theme } from "../types";

interface ComponentProps {
  data: {
    mostPlayed: IMostPlayed[];
  };
  onNotificationsPress: () => void;
  onRecentlyPlayedPress: () => void;
  onSettingsPress: () => void;
}

function Home({
  data,
  onNotificationsPress,
  onRecentlyPlayedPress,
  onSettingsPress
}: ComponentProps) {
  const { spacing } = useTheme() as Theme;

  return (
    <ScrollView>
      <SafeAreaView edges={["top", "right", "left"]}>
        <StatusBar barStyle="light-content" />
        <MostPlayed
          headerText="Good morning"
          data={data.mostPlayed}
          style={{
            marginLeft: spacing.m,
            marginTop: spacing.xl
          }}
          onNotificationsPress={onNotificationsPress}
          onRecentlyPlayedPress={onRecentlyPlayedPress}
          onSettingsPress={onSettingsPress}
        />
      </SafeAreaView>
    </ScrollView>
  );
}

export default Home;
