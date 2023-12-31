import FontAwesome from "@expo/vector-icons/FontAwesome";
import {useFonts} from "expo-font";
import {SplashScreen, Stack} from "expo-router";
import {useEffect} from "react";
import {useColorScheme} from "react-native";

export {ErrorBoundary} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(drawer)",
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  //Stack Navigator

  return (
    <>
      <Stack>
        <Stack.Screen name="(drawer)" options={{headerShown: false}} />
        <Stack.Screen name="modal" options={{presentation: "modal"}} />
        <Stack.Screen name="screens/tweet/id" options={{title: "Tweet"}} />
        <Stack.Screen
          name="screens/tweet/new-tweet"
          options={{title: "New Tweet", headerShown: false}}
        />
      </Stack>
    </>
  );
}
