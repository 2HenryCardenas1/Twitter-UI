export type User = {
  id: String;
  name: String;
  username: String;
  image?: String;
};

export type TweetType = {
  id: String;
  user: User;
  content: String;
  createdAt: String;
  image?: String;
  numberOfComments?: Number;
  numberOfRetweets?: Number;
  numberOfLikes?: Number;
  impressions?: Number;
};
