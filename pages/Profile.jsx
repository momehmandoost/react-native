import React, { useState } from "react";
import { View, Text, TextInput, Switch, StyleSheet } from "react-native";

const Profile = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isEnable, setIsEnable] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.textinput}
          onChangeText={(text) => setName(text)}
          value={name}
          placeholder="نام"
        />
        <TextInput
          style={styles.textinput}
          onChangeText={(text) => setAge(text)}
          value={age}
          placeholder="سن"
          keyboardType="numeric"
        />
        <View style={styles.switch}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setIsEnable((pre) => !pre)}
            value={isEnable}
          />
          <Text>سرپرست</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  form: {
    width: "80%",
    alignItems: "stretch",
    backgroundColor: "gray",
    padding: 20,
    borderRadius: 10,
  },
  textinput: {
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    textAlign: "center",
  },
  switch: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    direction: "rtl",
  },
});
