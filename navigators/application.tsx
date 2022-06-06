import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import * as React from "react";
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

const Tab = createBottomTabNavigator<NavigatorParamList>();

function Application() {
  const { spacing } = useTheme() as Theme;

  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        headerShown: false
      }}>
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