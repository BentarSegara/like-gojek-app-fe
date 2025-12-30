import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const ServiceButton = ({ title, icon, backgroundColor }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ marginVertical: 15, marginHorizontal: 25 }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 15,
          padding: 15,
          backgroundColor: backgroundColor,
          elevation: 5,
        }}
      >
        <FontAwesomeIcon icon={icon} size={30} color="white" />
      </View>
      <View>
        <Text style={{ textAlign: "center", fontWeight: "500" }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ServiceButton;
