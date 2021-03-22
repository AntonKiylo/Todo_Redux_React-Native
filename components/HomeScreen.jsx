import React from "react";
import Home from "./Home";
import DrawerContent from "./DrawerContent";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const HomeScreen = () => (
  <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
    <Drawer.Screen name='Home' component={Home} />
  </Drawer.Navigator>
);

export default HomeScreen;