import React from "react";
import { Text } from "react-native";

export const CustomText = ({ children }) => {
  return <Text style={{ fontFamily: "Iransans" }}>{children}</Text>;
};
