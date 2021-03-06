import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { ScrollView, StatusBar, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LargePreview from "../organisms/large-preview";
import MediumPreview from "../organisms/medium-preview";
import MiniPreview from "../organisms/mini-preview";
import { Preview, Theme } from "../types";

interface ComponentProps {
  data: {
    mostPlayed: Preview[];
    madeForYou: Preview[];
    recentlyPlayed: Preview[];
    yourTopMixes: Preview[];
  };
  onNotificationsPress: () => void;
  onRecentlyPlayedPress: () => void;
  onSettingsPress: () => void;
  onItemPress: (item: Preview) => void;
}

function Home({
  data,
  onNotificationsPress,
  onRecentlyPlayedPress,
  onSettingsPress,
  onItemPress
}: ComponentProps) {
  const { spacing, tabbarHeight, miniPlayerHeight, colors } =
    useTheme() as Theme;
  const scrollSectionHeaderStyle = { marginHorizontal: spacing.l };
  const scrollSectionContainerStyle = { marginBottom: spacing.l };
  const scrollSectionListContentContainerStyle = {
    paddingHorizontal: spacing.l
  };
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.0 }}
      end={{ x: 1.0, y: 1.0 }}
      locations={[0, 0.5]}
      colors={[colors.backgroundLight, colors.background]}
    >
      <ScrollView
        indicatorStyle="white"
        contentContainerStyle={{
          paddingBottom: tabbarHeight + miniPlayerHeight + insets.bottom
        }}
      >
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.background}
        />
        <View
          style={{
            marginTop: insets.top,
            marginLeft: insets.left,
            marginRight: insets.right
          }}
        >
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
            onItemPress={onItemPress}
          />
          <LargePreview
            headerText="Made for you"
            data={data.madeForYou}
            headerStyle={scrollSectionHeaderStyle}
            containerStyle={scrollSectionContainerStyle}
            listContentContainerStyle={scrollSectionListContentContainerStyle}
            onItemPress={onItemPress}
          />
          <MediumPreview
            headerText="Recently Played"
            data={data.recentlyPlayed}
            headerStyle={scrollSectionHeaderStyle}
            containerStyle={scrollSectionContainerStyle}
            listContentContainerStyle={scrollSectionListContentContainerStyle}
            onItemPress={onItemPress}
          />
          <LargePreview
            headerText="Your top mixes"
            data={data.yourTopMixes}
            headerStyle={scrollSectionHeaderStyle}
            containerStyle={scrollSectionContainerStyle}
            listContentContainerStyle={scrollSectionListContentContainerStyle}
            onItemPress={onItemPress}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

export default Home;
