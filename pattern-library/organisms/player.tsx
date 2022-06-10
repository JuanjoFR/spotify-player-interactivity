import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PlayControls from "../molecules/play-controls";
import PlayingInfo from "../molecules/playing-info";
import ProgressBar from "../molecules/progress-bar";
import { Detail, Theme } from "../types";
import PageHeader from "./page-header";

interface ComponentProps {
  data: Detail;
  onClosePress: () => void;
  onSettingsPress: () => void;
  onFavouritePress: () => void;
  onShufflePress: () => void;
  onSkipBackPress: () => void;
  onPlayPress: () => void;
  onSkipForwardPress: () => void;
  onRepeatPress: () => void;
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "space-around"
  },
  coverContainer: {
    flexShrink: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  cover: {
    flexShrink: 1,
    width: "100%",
    height: undefined,
    aspectRatio: 1
  },
  icon: {
    alignItems: "center",
    justifyContent: "center"
  }
});

function Player({
  data,
  onClosePress,
  onSettingsPress,
  onFavouritePress,
  onShufflePress,
  onSkipBackPress,
  onPlayPress,
  onSkipForwardPress,
  onRepeatPress
}: ComponentProps) {
  const { spacing, colors } = useTheme() as Theme;

  return (
    <SafeAreaView
      edges={["top", "right", "bottom", "left"]}
      style={[styles.safeArea, { backgroundColor: colors.playerBackground }]}
    >
      <PageHeader
        title="Liked Songs"
        onClosePress={onClosePress}
        onSettingsPress={onSettingsPress}
      />
      <View
        style={[
          styles.container,
          {
            marginHorizontal: spacing.l,
            marginBottom: spacing.xl
          }
        ]}
      >
        <View style={[styles.coverContainer, { marginBottom: spacing.xl }]}>
          <Image
            source={data.image}
            resizeMode="contain"
            style={[styles.cover]}
          />
        </View>
        <View>
          <PlayingInfo
            data={data}
            style={{ marginBottom: spacing.xl }}
            onFavouritePress={onFavouritePress}
          />
          <ProgressBar
            duration={data.duration}
            style={{ marginBottom: spacing.xl }}
          />
          <PlayControls
            onShufflePress={onShufflePress}
            onSkipBackPress={onSkipBackPress}
            onPlayPress={onPlayPress}
            onSkipForwardPress={onSkipForwardPress}
            onRepeatPress={onRepeatPress}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Player;
