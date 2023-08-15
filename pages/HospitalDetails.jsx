import React from "react";
import { View, Text } from "react-native";

const HospitalDetails = ({ route }) => {
  return (
    <View>
      <Text>{route.params.hospital}</Text>
    </View>
  );
};

export default HospitalDetails;
