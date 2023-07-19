import {StyleSheet} from "react-native";

import {Entypo} from "@expo/vector-icons";
import {Link} from "expo-router";
import {FlatList} from "react-native-gesture-handler";
import data from "../../assets/data/tweets";
import {View} from "../../components/Themed";
import Tweet from "../../components/Tweet";

const tweet = data[0];
export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Tweet tweet={item} />}
      />

      <Link
        href={{
          pathname: "/screens/tweet/new-tweet",
        }}
        asChild
      >
        <Entypo name="plus" size={30} color="white" style={styles.buttonAdd} />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },

  buttonAdd: {
    backgroundColor: "#1C9BF0",
    position: "absolute",
    bottom: 20,
    right: 20,
   
    borderRadius: 50,
    padding: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
