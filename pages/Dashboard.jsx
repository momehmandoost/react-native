import React from "react";
import { View, Text, Button, Alert } from "react-native";

const Dashboard = ({ navigation }) => {
  return (
    <View>
      <Text>Dashboard</Text>
      <Button
        title="Press me"
        onPress={() => navigation.navigate("Hospitals")}
      />
    </View>
  );
};

export default Dashboard;
