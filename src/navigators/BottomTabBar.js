import React, { useContext, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHouse,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import OrderScreen from "../screens/OrderScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Home from "../screens/HomeScreen";
import LoggedInProfile from "../screens/LoggedInProfile";
import { AuthContext } from "../authentication/AuthContext";

const Tab = createBottomTabNavigator();
export default function BottomTabBar() {
  const { userInfo } = useContext(AuthContext);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "Home") iconName = faHouse;
          else if (route.name === "Profile") iconName = faUser;
          else iconName = faCartShopping;

          return (
            <FontAwesomeIcon
              icon={iconName}
              size={20}
              color={focused ? "#49a346ff" : "#918d8dff"}
            />
          );
        },
        headerShown: false,
        tabBarActiveTintColor: "#49a346ff",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Order" component={OrderScreen} />
      <Tab.Screen
        name="Profile"
        component={
          Object.keys(userInfo).length === 0 ? ProfileScreen : LoggedInProfile
        }
      />
    </Tab.Navigator>
  );
}
