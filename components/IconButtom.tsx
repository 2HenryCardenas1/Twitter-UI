import {EvilIcons} from "@expo/vector-icons";
import React from "react";
import {Text, View} from "react-native";

type IconButtomProps = {
  icon: React.ComponentProps<typeof EvilIcons>["name"];
  data?: string;
};

const IconButtom = ({icon, data}: IconButtomProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <EvilIcons
        name={icon}
        size={24}
        color="gray"
        style={{
          height: icon === "chart" ? 24 : 22,
          width: icon === "chart" ? 24 : 22,
        }}
      />
      <Text style={{fontSize: 12, color: "gray"}}>{data}</Text>
    </View>
  );
};

export default IconButtom;
