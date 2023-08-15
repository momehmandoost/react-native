import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Dashboard = ({ navigation }) => {
  const Data = [
    { id: "1", title: "بیمارستان اول", tel: "02633510404" },
    { id: "2", title: "بیمارستان دوم", tel: "02633510404" },
    { id: "3", title: "بیمارستان سوم", tel: "02633510404" },
    { id: "4", title: "بیمارستان چهارم", tel: "02633510404" },
    { id: "5", title: "بیمارستان پنجم", tel: "02633510404" },
  ];

  const Item = ({ title, tel, id }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("HospitalDetails", { hospital: title })
      }
      style={styles.item}
    >
      <Text style={styles.title}>{id}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{tel}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <View style={[styles.item, { backgroundColor: "white" }]}>
            <Text style={styles.title}>آیدی</Text>
            <Text style={styles.title}>نام بیمارستان</Text>
            <Text style={styles.title}>شماره تلفن</Text>
          </View>
        }
        data={Data}
        renderItem={({ item }) => (
          <Item id={item.id} title={item.title} tel={item.tel} />
        )}
        keyExtractor={(item) => item.id}
        stickyHeaderIndices={[0]}
      />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    margin: 10,
    backgroundColor: "gray",
    padding: 13,
    borderRadius: 10,
  },
  title: {
    marginRight: 10,
  },
});
