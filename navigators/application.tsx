import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
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
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="library-outline" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default Application;
