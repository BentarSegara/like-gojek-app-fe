import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const ServiceButton = ({ title, icon, backgroundColor }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.touchable}
    >
      <View
        style={[styles.iconContainer, { backgroundColor: backgroundColor }]}
      >
        <FontAwesomeIcon icon={icon} size={30} color="white" />
      </View>
      <View>
        <Text style={{ textAlign: "center", fontWeight: "500" }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    marginVertical: 15,
    marginHorizontal: 25,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    padding: 15,
    elevation: 5,
  },
});

export default ServiceButton;
