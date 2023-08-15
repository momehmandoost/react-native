import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.item}>
          <TouchableOpacity
            style={[styles.touchable, { backgroundColor: "green" }]}
            onPress={() => navigation.navigate("Hospitals")}
          >
            <Text>بیمارستان ها</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            style={[styles.touchable, { backgroundColor: "red" }]}
            onPress={() => navigation.navigate("Hospitals")}
          >
            <Text>فرم سنجش</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.item}>
          <TouchableOpacity
            style={[styles.touchable, { backgroundColor: "blue" }]}
            onPress={() => navigation.navigate("Hospitals")}
          >
            <Text>داروخانه ها</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            style={[styles.touchable, { backgroundColor: "yellow" }]}
            onPress={() => navigation.navigate("Hospitals")}
          >
            <Text>اخبار</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.item}>
          <TouchableOpacity
            style={[styles.touchable, { backgroundColor: "pink" }]}
            onPress={() => navigation.navigate("Profile")}
          >
            <Text>پروفایل</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            style={[styles.touchable, { backgroundColor: "purple" }]}
            onPress={() => navigation.navigate("Profile")}
          >
            <Text>hi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    width: "50%",
    height: 100,
    padding: 10,
  },
  touchable: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "red",
  },
});
