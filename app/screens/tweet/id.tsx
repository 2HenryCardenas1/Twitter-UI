import {useSearchParams} from "expo-router";

import React from "react";
import {Text} from "react-native";
import tweets from "../../../assets/data/tweets";
import Tweet from "../../../components/Tweet";
const TweetScreen = () => {
  const {id} = useSearchParams();

  const tweet = tweets.find((tweet) => tweet.id === id);

  if (!tweet) return <Text>Tweet {id} not found!</Text>;

  return <Tweet tweet={tweet} />;
};

export default TweetScreen;
