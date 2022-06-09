import { useTheme } from "@react-navigation/native";
import * as React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Label from "../atoms/label";
import Title from "../atoms/title";
import { Detail, Theme } from "../types";

interface ComponentProps {
  data: Detail;
  style: StyleProp<ViewStyle>;
  onFavouritePress: () => void;
}

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  textContainer: { flex: 1 },
  icon: {
    alignItems: "center",
    justifyContent: "center"
  }
});

function PlayingInfo({ data, style, onFavouritePress }: ComponentProps) {
  const { colors, iconSize, pressedOpacity, pressableSize } =
    useTheme() as Theme;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.textContainer}>
        <Title variant="m" numberOfLines={1}>
          {data.song}
        </Title>
        <Label variant="m2" numberOfLines={1}>
          {data.artist}
        </Label>
      </View>
      <Pressable
        style={[
          styles.icon,
          {
            width: pressableSize.m,
            height: pressableSize.m
          }
        ]}
        onPress={onFavouritePress}
      >
        {({ pressed }) => (
          <Ionicons
            name="heart"
            color={colors.primary}
            size={iconSize.m}
            style={pressed ? { opacity: pressedOpacity } : null}
          />
        )}
      </Pressable>
    </View>
  );
}

export default PlayingInfo;
