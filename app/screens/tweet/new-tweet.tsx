import {Link, useRouter} from "expo-router";
import React from "react";
import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {TextInput} from "react-native-gesture-handler";
import {SafeAreaView} from "react-native-safe-area-context";

const NewTweet = () => {
  const user = {
    id: "u1",
    username: "VadimNotJustDev",
    name: "Vadim",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
  };

  const [text, setText] = React.useState("");
  const router = useRouter();

  const onTweetPress = () => {
    console.warn("Tweeted!", text);

    router.back();
    setText("");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerBottom}>
        <Link href={"../"} style={{fontSize: 18}}>
          Cancel
        </Link>

        <Pressable onPress={onTweetPress} style={styles.buttomTweet}>
          <Text style={styles.textBtnTweet}>Tweet</Text>
        </Pressable>
      </View>

      <View style={{flexDirection: "row"}}>
        <Image src={user.image} style={styles.imageProfile} />
        <TextInput
          placeholder="What's happening?"
          multiline
          numberOfLines={5}
          style={styles.inputStyle}
          value={text}
          onChangeText={(value) => {
            setText(value);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default NewTweet;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },

  containerBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    alignItems: "center",
  },

  buttomTweet: {
    backgroundColor: "#1C9BF0",
    padding: 10,
    borderRadius: 50,
    paddingHorizontal: 20,
  },
  textBtnTweet: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
  imageProfile: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
  },
  inputStyle: {
    textAlignVertical: "top",
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
});
