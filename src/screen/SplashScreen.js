import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("BottomTabBar");
    }, 1000);
  }, []);

  return (
    <View
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <FontAwesomeIcon
          icon={faMotorcycle}
          size={40}
          color="white"
          style={{ marginRight: 10, transform: [{ scaleX: -1 }] }}
        />
        <Text
          style={styles.logoText}
        >
          Ujek
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5ecc5bff",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default SplashScreen;
