import React from "react";
import { View, Text } from "react-native";

const HospitalDetails = ({ routea }) => {
  return (
    <View>
      <Text>{route.params.hospital}</Text>
    </View>
  );
};

export default HospitalDetails;
