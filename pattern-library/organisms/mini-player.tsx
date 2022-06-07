import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Label from "../atoms/label";
import { MiniPlayer as IMiniPlayer, Theme } from "../types";

interface ComponentProps {
  data: IMiniPlayer;
  onDevicePress: () => void;
  onPlayPress: () => void;
}

const styles = StyleSheet.create({
  globalContainer: { flexDirection: "row" },
  image: { backgroundColor: "yellow" },
  textContainer: { flex: 1, justifyContent: "center" },
  iconsContainer: { flexDirection: "row", alignItems: "center" },
  iconContainer: { alignItems: "center", justifyContent: "center" }
});

function MiniPlayer({ data, onDevicePress, onPlayPress }: ComponentProps) {
  const {
    spacing,
    radius,
    colors,
    pressedOpacity,
    pressableSize,
    thumbnail,
    iconSize
  } = useTheme() as Theme;

  return (
    <View
      style={[
        styles.globalContainer,
        {
          backgroundColor: colors.miniPlayerBackground,
          marginHorizontal: spacing.m,
          borderRadius: radius.m
        }
      ]}>
      <View
        style={[
          styles.image,
          {
            width: thumbnail.s,
            height: thumbnail.s,
            margin: spacing.m,
            borderRadius: radius.s
          }
        ]}
      />
      <View
        style={[
          styles.textContainer,
          {
            marginVertical: spacing.m,
            marginRight: spacing.m
          }
        ]}>
        <Label variant="m3">{data.song}</Label>
        <Label variant="m2">{data.artist}</Label>
      </View>
      <View style={styles.iconsContainer}>
        <Pressable
          style={[
            styles.iconContainer,
            {
              width: pressableSize.m,
              height: pressableSize.m
            }
          ]}
          onPress={onDevicePress}>
          {({ pressed }) => (
            <Ionicons
              name="tv-outline"
              color={colors.text}
              size={iconSize.s}
              style={pressed ? { opacity: pressedOpacity } : null}
            />
          )}
        </Pressable>
        <Pressable
          style={[
            styles.iconContainer,
            {
              width: pressableSize.m,
              height: pressableSize.m
            }
          ]}
          onPress={onPlayPress}>
          {({ pressed }) => (
            <Ionicons
              name="play"
              color={colors.text}
              size={iconSize.s}
              style={pressed ? { opacity: pressedOpacity } : null}
            />
          )}
        </Pressable>
      </View>
    </View>
  );
}

export default MiniPlayer;
