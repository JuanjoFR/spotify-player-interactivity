import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { Dimensions, Platform, StyleSheet } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent
} from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MiniPlayer as IMiniPlayer, Theme } from "../types";
import ApplicationBottomTab from "./application-bottom-tab";
import MiniPlayer from "./mini-player";
import Player from "./player";

interface ComponentProps extends BottomTabBarProps {
  data: IMiniPlayer;
  onMiniPlayerDevicePress: () => void;
  onMiniPlayerPlayPress: () => void;
}

type AnimatedGHContext = {
  startY: number;
};

const STATUS_BAR_HEIGHT = Platform.OS === "android" ? 24 : 0;
const styles = StyleSheet.create({
  playersContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  player: { flex: 1 },
  miniPlayer: { position: "absolute", left: 0, right: 0 },
  tabBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center"
  }
});
const { height } = Dimensions.get("window");
const SNAP_TOP = 0;

function clamp(value: number, min: number, max: number) {
  "worklet";
  return Math.min(Math.max(value, min), max);
}

function TabBar({
  data,
  onMiniPlayerDevicePress,
  onMiniPlayerPlayPress,
  ...rest
}: ComponentProps) {
  const { colors, tabbarHeight, miniPlayerHeight } = useTheme() as Theme;
  const insets = useSafeAreaInsets();
  const SNAP_BOTTOM =
    height -
    tabbarHeight -
    miniPlayerHeight -
    insets.bottom -
    STATUS_BAR_HEIGHT;
  const translateY = useSharedValue(SNAP_BOTTOM);
  const playersContainerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }]
    };
  });
  const miniPlayerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        translateY.value,
        [SNAP_BOTTOM, SNAP_BOTTOM - miniPlayerHeight],
        [1, 0],
        {
          extrapolateLeft: Extrapolate.CLAMP,
          extrapolateRight: Extrapolate.CLAMP
        }
      )
    };
  });
  const playerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        translateY.value,
        [SNAP_BOTTOM, SNAP_BOTTOM - miniPlayerHeight],
        [0, 1],
        {
          extrapolateLeft: Extrapolate.CLAMP,
          extrapolateRight: Extrapolate.CLAMP
        }
      )
    };
  });
  const tabbarAAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            translateY.value,
            [SNAP_BOTTOM, SNAP_TOP],
            [0, tabbarHeight + insets.bottom],
            {
              extrapolateLeft: Extrapolate.CLAMP,
              extrapolateRight: Extrapolate.CLAMP
            }
          )
        }
      ]
    };
  });
  const eventHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    AnimatedGHContext
  >({
    onStart: (_event, context) => {
      console.log("start");

      context.startY = translateY.value;
    },
    onActive: (event, context) => {
      console.log("active");

      translateY.value = clamp(
        context.startY + event.translationY,
        SNAP_TOP,
        SNAP_BOTTOM
      );
    },
    onEnd: event => {
      console.log("end");

      // config visualizer: https://mohit23x.github.io/reanimated-config-visualizer/
      translateY.value = withSpring(SNAP_TOP, {
        velocity: event.velocityY,
        damping: 14,
        mass: 0.2,
        stiffness: 200
      });
    }
  });

  return (
    <React.Fragment>
      <PanGestureHandler onGestureEvent={eventHandler}>
        <Animated.View
          style={[styles.playersContainer, playersContainerAnimatedStyle]}
        >
          <Animated.View style={[styles.player, playerAnimatedStyle]}>
            <Player />
          </Animated.View>
          <Animated.View style={[styles.miniPlayer, miniPlayerAnimatedStyle]}>
            <MiniPlayer
              data={data}
              onDevicePress={onMiniPlayerDevicePress}
              onPlayPress={onMiniPlayerPlayPress}
            />
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
      <Animated.View
        style={[
          styles.tabBarContainer,
          {
            height: tabbarHeight + insets.bottom,
            backgroundColor: colors.background
          },
          tabbarAAnimatedStyle
        ]}
      >
        <ApplicationBottomTab {...rest} />
      </Animated.View>
    </React.Fragment>
  );
}

export default TabBar;
