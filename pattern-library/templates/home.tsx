import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LargePreview from "../organisms/large-preview";
import MediumPreview from "../organisms/medium-preview";
import MiniPreview from "../organisms/mini-preview";
import { Preview, Theme } from "../types";

interface ComponentProps {
  data: {
    mostPlayed: Preview[];
    madeForYou: Preview[];
    recentlyPlayed: Preview[];
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
        <MiniPreview
          headerText="Good morning"
          data={data.mostPlayed}
          containerStyle={{
            marginLeft: spacing.l,
            marginTop: spacing.xl,
            marginBottom: spacing.l
          }}
          listStyle={{ marginRight: spacing.l }}
          onNotificationsPress={onNotificationsPress}
          onRecentlyPlayedPress={onRecentlyPlayedPress}
          onSettingsPress={onSettingsPress}
        />
        <LargePreview
          headerText="Made for you"
          data={data.madeForYou}
          containerStyle={{
            marginHorizontal: spacing.l,
            marginBottom: spacing.l
          }}
        />
        <MediumPreview
          headerText="Recently Played"
          data={data.recentlyPlayed}
          containerStyle={{
            marginHorizontal: spacing.l,
            marginBottom: spacing.l
          }}
        />
      </SafeAreaView>
    </ScrollView>
  );
}

export default Home;
