import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { Dimensions, StatusBar, StyleSheet } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent
} from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Detail, Theme } from "../types";
import ApplicationBottomTab from "./application-bottom-tab";
import MiniPlayer from "./mini-player";
import Player from "./player";

interface ComponentProps extends BottomTabBarProps {
  data: Detail;
  onMiniPlayerDevicePress: () => void;
  onMiniPlayerPlayPress: () => void;
  onPlayerClosePress: () => void;
  onPlayerSettingsPress: () => void;
  onPlayerFavouritePress: () => void;
  onPlayerShufflePress: () => void;
  onPlayerSkipBackPress: () => void;
  onPlayerPlayPress: () => void;
  onPlayerSkipForwardPress: () => void;
  onPlayerRepeatPress: () => void;
}

type AnimatedGHContext = {
  startY: number;
};

const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 0;
const { height } = Dimensions.get("window");
const SNAP_TOP = 0;
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

function clamp(value: number, min: number, max: number) {
  "worklet";
  return Math.min(Math.max(value, min), max);
}

function TabBar({
  data,
  onMiniPlayerDevicePress,
  onMiniPlayerPlayPress,
  onPlayerClosePress,
  onPlayerSettingsPress,
  onPlayerFavouritePress,
  onPlayerShufflePress,
  onPlayerSkipBackPress,
  onPlayerPlayPress,
  onPlayerSkipForwardPress,
  onPlayerRepeatPress,
  ...rest
}: ComponentProps) {
  const { colors, tabbarHeight, miniPlayerHeight, pressableSize } =
    useTheme() as Theme;
  const insets = useSafeAreaInsets();
  const SNAP_BOTTOM =
    height -
    tabbarHeight -
    miniPlayerHeight -
    insets.bottom -
    STATUS_BAR_HEIGHT;
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const translateY = useSharedValue(isOpen ? SNAP_TOP : SNAP_BOTTOM);
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
      context.startY = translateY.value;
    },
    onActive: (event, context) => {
      translateY.value = clamp(
        context.startY + event.translationY,
        SNAP_TOP,
        SNAP_BOTTOM
      );
    },
    onEnd: event => {
      // check this tutorial: https://blog.swmansion.com/building-reigns-how-to-reign-over-mobile-game-development-using-reanimated-2-pa-55ae2017df50
      // config visualizer: https://mohit23x.github.io/reanimated-config-visualizer/
      const springConfig = {
        velocity: event.velocityY,
        damping: 14,
        mass: 0.2,
        stiffness: 200
      };
      const time = 0.2;
      const tossY = event.translationY + time * event.velocityY;

      if (isOpen) {
        if (tossY > pressableSize.m * 2) {
          console.log("close player");

          translateY.value = withSpring(SNAP_BOTTOM, springConfig);
          runOnJS(setIsOpen)(false);
        } else {
          console.log("return to open player");

          translateY.value = withSpring(SNAP_TOP, springConfig);
        }
      } else {
        if (tossY < pressableSize.m * 2 * -1) {
          console.log("open player");

          translateY.value = withSpring(SNAP_TOP, springConfig);
          runOnJS(setIsOpen)(true);
        } else {
          console.log("return to close player");

          translateY.value = withSpring(SNAP_BOTTOM, springConfig);
        }
      }
    }
  });

  function handlePlayerClosePress() {
    translateY.value = withSpring(SNAP_BOTTOM, {
      damping: 14,
      mass: 0.2,
      stiffness: 200
    });
    runOnJS(setIsOpen)(false);

    onPlayerClosePress();
  }

  return (
    <React.Fragment>
      <PanGestureHandler onGestureEvent={eventHandler}>
        <Animated.View
          style={[styles.playersContainer, playersContainerAnimatedStyle]}
        >
          <Animated.View
            pointerEvents={isOpen ? "auto" : "none"}
            style={[styles.player, playerAnimatedStyle]}
          >
            <Player
              data={data}
              onClosePress={handlePlayerClosePress}
              onSettingsPress={onPlayerSettingsPress}
              onFavouritePress={onPlayerFavouritePress}
              onShufflePress={onPlayerShufflePress}
              onSkipBackPress={onPlayerSkipBackPress}
              onPlayPress={onPlayerPlayPress}
              onSkipForwardPress={onPlayerSkipForwardPress}
              onRepeatPress={onPlayerRepeatPress}
            />
          </Animated.View>
          <Animated.View
            pointerEvents={isOpen ? "none" : "auto"}
            style={[styles.miniPlayer, miniPlayerAnimatedStyle]}
          >
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
