import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Theme } from "../types";

interface ComponentProps {
  onShufflePress: () => void;
  onSkipBackPress: () => void;
  onPlayPress: () => void;
  onSkipForwardPress: () => void;
  onRepeatPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  icon: {
    alignItems: "center",
    justifyContent: "center"
  },
  playIconWrapper: {
    alignItems: "center",
    justifyContent: "center"
  },
  playIcon: {
    left: 2
  }
});

function PlayControls({
  onShufflePress,
  onSkipBackPress,
  onPlayPress,
  onSkipForwardPress,
  onRepeatPress
}: ComponentProps) {
  const { colors, iconSize, pressedOpacity, pressableSize } =
    useTheme() as Theme;

  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.icon,
          {
            width: pressableSize.m,
            height: pressableSize.m
          }
        ]}
        onPress={onShufflePress}
      >
        {({ pressed }) => (
          <Ionicons
            name="shuffle"
            color={colors.primary}
            size={iconSize.l}
            style={pressed ? { opacity: pressedOpacity } : null}
          />
        )}
      </Pressable>
      <Pressable
        style={[
          styles.icon,
          {
            width: pressableSize.m,
            height: pressableSize.m
          }
        ]}
        onPress={onSkipBackPress}
      >
        {({ pressed }) => (
          <Ionicons
            name="play-skip-back"
            color={colors.text}
            size={iconSize.l}
            style={pressed ? { opacity: pressedOpacity } : null}
          />
        )}
      </Pressable>
      <Pressable
        style={[
          styles.icon,
          {
            width: iconSize.xl,
            height: iconSize.xl
          }
        ]}
        onPress={onPlayPress}
      >
        {({ pressed }) => (
          <View
            style={[
              styles.playIconWrapper,
              {
                backgroundColor: colors.text,
                width: iconSize.xl,
                height: iconSize.xl,
                borderRadius: iconSize.xl / 2
              },
              pressed ? { opacity: pressedOpacity } : null
            ]}
          >
            <Ionicons
              name="play"
              color={colors.playerBackground}
              size={iconSize.l}
              style={styles.playIcon}
            />
          </View>
        )}
      </Pressable>
      <Pressable
        style={[
          styles.icon,
          {
            width: pressableSize.m,
            height: pressableSize.m
          }
        ]}
        onPress={onSkipForwardPress}
      >
        {({ pressed }) => (
          <Ionicons
            name="play-skip-forward"
            color={colors.text}
            size={iconSize.l}
            style={pressed ? { opacity: pressedOpacity } : null}
          />
        )}
      </Pressable>
      <Pressable
        style={[
          styles.icon,
          {
            width: pressableSize.m,
            height: pressableSize.m
          }
        ]}
        onPress={onRepeatPress}
      >
        {({ pressed }) => (
          <Ionicons
            name="repeat"
            color={colors.primary}
            size={iconSize.l}
            style={pressed ? { opacity: pressedOpacity } : null}
          />
        )}
      </Pressable>
    </View>
  );
}

export default PlayControls;
