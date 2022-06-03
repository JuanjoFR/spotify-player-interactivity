import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
    </Tab.Navigator>
  );
}

export default Application;
