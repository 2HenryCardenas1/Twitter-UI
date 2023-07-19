import {createDrawerNavigator} from "@react-navigation/drawer";
import {withLayoutContext} from "expo-router";
import React from "react";
const DrawerNavigation = createDrawerNavigator().Navigator;

const Drawer = withLayoutContext(DrawerNavigation);
export default function DrawerLayout() {
  return <Drawer />;
}
