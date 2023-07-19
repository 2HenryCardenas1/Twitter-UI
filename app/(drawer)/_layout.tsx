import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import {withLayoutContext} from "expo-router";
import React from "react";
import {Text} from "react-native";
const DrawerNavigation = createDrawerNavigator().Navigator;

const Drawer = withLayoutContext(DrawerNavigation);

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Text style={{fontSize: 20, alignSelf: "center"}}>H3C4</Text>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  return (
    <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="(tabs)"
        options={{headerShown: false, title: "Home"}}
      />
      <Drawer.Screen name="bookmarks" options={{title: "Bookmark"}} />
      <Drawer.Screen name="twitter-blue" options={{title: "Twitter Blue"}} />
    </Drawer>
  );
}
