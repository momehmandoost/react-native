import React, { useReducer } from "react";
import {
  View,
  Text,
  TextInput,
  Switch,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";



import { Card } from "./Card";

const initialState = {
  name: "",
  age: "",
  isEnable: false,
  nameError: "",
  ageError: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload, nameError: "" };
    case "SET_AGE":
      return { ...state, age: action.payload, ageError: "" };
    case "SET_IS_ENABLE":
      return { ...state, isEnable: action.payload };
    case "SET_NAME_ERROR":
      return { ...state, nameError: action.payload };
    case "SET_AGE_ERROR":
      return { ...state, ageError: action.payload };
    default:
      return state;
  }
};

const Profile = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleNameChange = (text) => {
    dispatch({ type: "SET_NAME", payload: text });
  };

  const handleAgeChange = (text) => {
    dispatch({ type: "SET_AGE", payload: text, ageError: "" });
  };

  const handleSwitchChange = () => {
    dispatch({ type: "SET_IS_ENABLE", payload: !state.isEnable });
  };

  const handleSubmit = () => {
    if (!state.name) {
      dispatch({ type: "SET_NAME_ERROR", payload: "نام الزامی است" });
      return;
    }

    if (!state.age) {
      dispatch({ type: "SET_AGE_ERROR", payload: "سن الزامی است" });
      return;
    }

    if (!state.name || !state.age) {
      Alert.alert("اطلاعات فرم را تکمیل کنید", [
        {
          text: "تایید",
          onPress: () => console.log("Form is not complete"), // Handle incomplete form submission
          style: "destructive",
        },
      ]);
      return;
    }

    // Form validation successful, proceed with your logic here

    // For demonstration purposes, you can log the form data
    console.log("Name:", state.name);
    console.log("Age:", state.age);
    console.log("IsEnable:", state.isEnable);
  };

  const handleFormPress = () => {
    // Dismiss the keyboard when the form is pressed
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleFormPress}>
      <View style={styles.container}>
        <Card style={styles.form}>
          <TextInput
            style={styles.textinput}
            onChangeText={handleNameChange}
            value={state.name}
            placeholder="نام"
          />
          {state.nameError ? (
            <Text style={styles.error}>{state.nameError}</Text>
          ) : null}
          <TextInput
            style={styles.textinput}
            onChangeText={handleAgeChange}
            value={state.age}
            placeholder="سن"
            keyboardType="numeric"
          />
          {state.ageError ? (
            <Text style={styles.error}>{state.ageError}</Text>
          ) : null}
          <View style={styles.switch}>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              ios_backgroundColor="#3e3e3e"
              onValueChange={handleSwitchChange}
              value={state.isEnable}
            />
            <Text>سرپرست</Text>
          </View>
          <Button title="ثبت" onPress={handleSubmit} />
        </Card>
      </View>
    </TouchableWithoutFeedback>
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
  error: {
    color: "red",
    textAlign: "center",
  },
});
