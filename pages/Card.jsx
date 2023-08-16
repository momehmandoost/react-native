import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = ({ children, style }) => {
  return <View style={{ ...styles.form, ...style }}>{children}</View>;
};

export { Card };

const styles = StyleSheet.create({
  form: {
    width: "80%",
    alignItems: "stretch",
    backgroundColor: "gray",
    padding: 20,
    borderRadius: 10,
    // IOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 5,
    shadowRadius: 6,
    // android
    elevation: 6,
  },
});
