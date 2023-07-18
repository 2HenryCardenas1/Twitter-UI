import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {TweetType} from "../types";

type TweetProps = {
  tweet: TweetType;
  
};

const Tweet = ({tweet}: TweetProps) => {
  return (
    <View style={styles.container}>
      <Image src={tweet.user.image} style={styles.user_image} />

      <View style={styles.mainContainer}>
        <Text style={styles.name}>{tweet.user.name}</Text>

        <Text style={styles.content}>{tweet.content}</Text>
      </View>
    </View>
  );
};

export default Tweet;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },
  user_image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  name: {
    fontWeight: "600",
  },
  content: {
    marginTop: 5,
    lineHeight: 20,
  },
});
