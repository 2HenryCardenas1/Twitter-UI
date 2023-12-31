import FontAwesome from "@expo/vector-icons/FontAwesome";
import {Link, Tabs, useNavigation} from "expo-router";
import {Image, Pressable, useColorScheme} from "react-native";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{marginBottom: -3}} {...props} />;
}

function AvatarIcon() {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.openDrawer()}>
      <Image
        src="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg"
        style={{width: 35, aspectRatio: 1, borderRadius: 30, marginLeft: 15}}
      />
    </Pressable>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tab One",
          tabBarIcon: ({color}) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({pressed}) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={"blue"}
                    style={{marginRight: 15, opacity: pressed ? 0.5 : 1}}
                  />
                )}
              </Pressable>
            </Link>
          ),

          headerLeft: () => <AvatarIcon />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          tabBarIcon: ({color}) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}
