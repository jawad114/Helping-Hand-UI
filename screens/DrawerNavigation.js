import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home", // Setting title for the screen
          drawerIcon: (
            { focused, color, size } // Defining the drawer icon
          ) => <MaterialIcons name="home" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings", // Setting title for the screen
          drawerIcon: (
            { focused, color, size } // Defining the drawer icon
          ) => <MaterialIcons name="settings" size={size} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
