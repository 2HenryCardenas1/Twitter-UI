import {StyleSheet} from "react-native";

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
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
});
