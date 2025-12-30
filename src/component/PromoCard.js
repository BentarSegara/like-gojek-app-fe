import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const PromoCard = ({ title, description, category }) => {
  const colors = {
    discount: ["#F9773B", "#F99B4A"],
    cashback: ["#597CFB", "#BD63FA"],
    special: ["#38D879", "#6DEF4D"],
  };

  return (
    <LinearGradient
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 1 }}
      colors={colors[category]}
      style={styles.container}
    >
      <View style={{ marginBottom: 10 }}>
        <Text
          style={styles.titleText}
        >
          {title}
        </Text>
        <Text style={styles.descriptionText}>
          {description}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
      >
        <Text style={{ fontWeight: "500" }}>Pakai Sekarang</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 165,
    height: "auto",
    padding: 15,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  descriptionText: {
    fontSize: 14,
    textAlign: "center",
    color: "white",
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
});

export default PromoCard;
