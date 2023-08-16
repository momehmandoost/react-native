import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { CustomText } from "../components/CustomText";
import { Entypo } from "@expo/vector-icons";

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.item}>
          <TouchableOpacity
            style={[styles.touchable, { backgroundColor: "green" }]}
            onPress={() => navigation.navigate("Hospitals")}
          >
            <View
              style={{
                borderRadius: 50,
                backgroundColor: "white",
                width: 50,
                height: 50,
                overflow: "hidden",
                borderWidth: 1,
                borderColor: "black",
              }}
            >
              <Image
                source={require("../assets/hospital.png")}
                style={{ width: 50, height: 50, resizeMode: "contain" }}
                resizeMode="cover"
              />
            </View>
            <Text style={{ fontFamily: "Iransans" }}>بیمارستان ها</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            style={[styles.touchable, { backgroundColor: "red" }]}
            onPress={() => navigation.navigate("Hospitals")}
          >
            <View
              style={{
                borderRadius: 50,
                backgroundColor: "white",
                width: 50,
                height: 50,
                overflow: "hidden",
                borderWidth: 1,
                borderColor: "black",
              }}
            >
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/4320/4320337.png",
                }}
                style={{ width: 50, height: 50, resizeMode: "contain" }}
                resizeMode="cover"
              />
            </View>
            <Text style={{ fontFamily: "Iransans" }}>فرم سنجش</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.item}>
          <TouchableOpacity
            style={[styles.touchable, { backgroundColor: "blue" }]}
            onPress={() => navigation.navigate("Hospitals")}
          >
            <Entypo name="news" size={50} color="black" />
            <CustomText>داروخانه ها</CustomText>
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
