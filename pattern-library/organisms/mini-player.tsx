import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Label from "../atoms/label";
import { Detail, Theme } from "../types";

interface ComponentProps {
  data: Detail;
  onDevicePress: () => void;
  onPlayPress: () => void;
}

const styles = StyleSheet.create({
  globalContainer: { flexDirection: "row", alignItems: "center" },
  textContainer: { flex: 1, justifyContent: "center" },
  iconsContainer: { flexDirection: "row", alignItems: "center" },
  iconContainer: { alignItems: "center", justifyContent: "center" },
  progressBar: { height: 1, position: "absolute", left: 0, right: 0, bottom: 1 }
});

function MiniPlayer({ data, onDevicePress, onPlayPress }: ComponentProps) {
  const {
    spacing,
    radius,
    colors,
    pressedOpacity,
    pressableSize,
    thumbnail,
    iconSize,
    miniPlayerHeight
  } = useTheme() as Theme;

  return (
    <React.Fragment>
      <View
        style={[
          styles.globalContainer,
          {
            backgroundColor: colors.miniPlayerBackground,
            marginHorizontal: spacing.m,
            borderRadius: radius.m,
            height: miniPlayerHeight
          }
        ]}
      >
        <Image
          source={data.image}
          style={{
            width: thumbnail.s,
            height: thumbnail.s,
            margin: spacing.m,
            borderRadius: radius.s
          }}
        />
        <View
          style={[
            styles.textContainer,
            {
              marginRight: spacing.m
            }
          ]}
        >
          <Label variant="m3" numberOfLines={1}>
            {data.song}
          </Label>
          <Label variant="m2" numberOfLines={1}>
            {data.artist}
          </Label>
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
            onPress={onDevicePress}
          >
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
            onPress={onPlayPress}
          >
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
        <View
          style={[
            styles.progressBar,
            {
              marginHorizontal: spacing.m,
              backgroundColor: colors.progressBackground
            }
          ]}
        />
      </View>
    </React.Fragment>
  );
}

export default MiniPlayer;
