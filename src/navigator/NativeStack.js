import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screen/SplashScreen";
import BottomTabBar from "../navigator/BottomTabBar";
import LoginScreen from "../screen/LoginScreen";
import RegisterScreen from "../screen/RegisterScreen";

const Stack = createNativeStackNavigator();

const NativeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="BottomTabBar" component={BottomTabBar} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default NativeStack;
