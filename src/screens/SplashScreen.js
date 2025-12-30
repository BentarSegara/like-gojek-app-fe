import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

const SplashScreen = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      navigation.replace("BottomTabBar");
    }, 1000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#5ecc5bff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <FontAwesomeIcon
          icon={faMotorcycle}
          size={40}
          color="white"
          style={{ marginRight: 10, transform: [{ scaleX: -1 }] }}
        />
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
        >
          Ujek
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;
