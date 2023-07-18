import {Entypo} from "@expo/vector-icons";
import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {TweetType} from "../types";
import IconButtom from "./IconButtom";
type TweetProps = {
  tweet: TweetType;
};

const Tweet = ({tweet}: TweetProps) => {
  return (
    <View style={styles.container}>
      <Image src={tweet.user.image} style={styles.user_image} />

      <View style={styles.mainContainer}>
        <View style={{flexDirection: "row"}}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.user_name}>{tweet.user.username}•2h</Text>
          <Entypo
            name="dots-three-horizontal"
            size={16}
            color="gray"
            style={{marginLeft: "auto"}}
          />
        </View>

        <Text style={styles.content}>{tweet.content}</Text>
        {tweet.image && <Image src={tweet.image} style={styles.imageTweet} />}
        <View style={styles.footerContainer}>
          <IconButtom icon="comment" data={`${tweet.numberOfComments}`} />
          <IconButtom icon="retweet" data={`${tweet.numberOfRetweets}`} />
          <IconButtom icon="heart" data={`${tweet.numberOfLikes}M`} />
          <IconButtom
            icon="chart"
            data={tweet?.impressions?.toString() || "0"}
          />
          <IconButtom icon="share-apple" />
        </View>
      </View>
    </View>
  );
};

export default Tweet;

const styles = StyleSheet.create({
  container: {
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
  user_name: {
    color: "grey",
    marginLeft: 5,
  },
  content: {
    marginTop: 5,
    lineHeight: 20,
  },
  imageTweet: {
    width: "100%",
    aspectRatio: 16 / 9,
    marginTop: 10,
    borderRadius: 10,
  },

  //Footer
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
});
