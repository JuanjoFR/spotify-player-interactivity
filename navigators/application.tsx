import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { ImageSourcePropType } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import TabBar from "../pattern-library/organisms/tab-bar";
import { Theme } from "../pattern-library/types";
import HomeScreen from "../screens/home";
import LibraryScreen from "../screens/library";
import SearchScreen from "../screens/search";

type NavigatorParamList = {
  Home: undefined;
  Search: undefined;
  Library: undefined;
};

interface Data {
  artist: string;
  song: string;
  image: ImageSourcePropType;
  duration: string;
}

const data: Data = {
  artist: "Florence + The Machine, The Blessed Madonna",
  song: "Free - The Blessed Madonna Remix",
  image: require("../assets/images/Photo-from-Pixabay.jpg"),
  duration: "6:32"
};
const Tab = createBottomTabNavigator<NavigatorParamList>();

function Application() {
  const { spacing } = useTheme() as Theme;

  function handleMiniPlayerDevicePress() {
    console.log("handle mini player device press");
  }

  function handleMiniPlayerPlayPress() {
    console.log("handle mini player play press");
  }

  function handlePlayerClosePress() {
    console.log("handle player close press");
  }

  function handlePlayerFavouritePress() {
    console.log("handle player favourite press");
  }

  function handlePlayerShufflePress() {
    console.log("handle player shuffle press");
  }

  function handlePlayerSkipBackPress() {
    console.log("handle player skip back press");
  }

  function handlePlayerPlayPress() {
    console.log("handle player play press");
  }

  function handlePlayerSkipForwardPress() {
    console.log("handle player skip forward press");
  }

  function handlePlayerRepeatPress() {
    console.log("handle player repeat press");
  }

  return (
    <Tab.Navigator
      tabBar={props => (
        <TabBar
          {...props}
          data={data}
          onMiniPlayerDevicePress={handleMiniPlayerDevicePress}
          onMiniPlayerPlayPress={handleMiniPlayerPlayPress}
          onClosePress={handlePlayerClosePress}
          onFavouritePress={handlePlayerFavouritePress}
          onShufflePress={handlePlayerShufflePress}
          onSkipBackPress={handlePlayerSkipBackPress}
          onPlayPress={handlePlayerPlayPress}
          onSkipForwardPress={handlePlayerSkipForwardPress}
          onRepeatPress={handlePlayerRepeatPress}
        />
      )}
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Ionicons
                name="home"
                color={color}
                size={size}
                style={{ marginBottom: spacing.s }}
              />
            ) : (
              <Ionicons
                name="home-outline"
                color={color}
                size={size}
                style={{ marginBottom: spacing.s }}
              />
            )
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Ionicons
                name="search"
                color={color}
                size={size}
                style={{ marginBottom: spacing.s }}
              />
            ) : (
              <Ionicons
                name="search-outline"
                color={color}
                size={size}
                style={{ marginBottom: spacing.s }}
              />
            )
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) =>
            focused ? (
              <Ionicons
                name="library"
                color={color}
                size={size}
                style={{ marginBottom: spacing.s }}
              />
            ) : (
              <Ionicons
                name="library-outline"
                color={color}
                size={size}
                style={{ marginBottom: spacing.s }}
              />
            )
        }}
      />
    </Tab.Navigator>
  );
}

export default Application;
