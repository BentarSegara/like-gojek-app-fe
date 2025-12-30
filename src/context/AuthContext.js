import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const register = async (user) => {
    const users = await getUserList();

    let newUsers;
    if (users) {
      newUsers = [...users, user];
    } else {
      newUsers = [user];
    }

    await AsyncStorage.setItem("users", JSON.stringify(newUsers));
  };

  const login = async ({ email, password }) => {
    const users = await getUserList();

    const user = users.filter((user) => user.email === email)[0];

    if (user) {
      if (user.password === password) {
        setUserInfo(user);
        await AsyncStorage.setItem("currUser", JSON.stringify(user));
        return;
      }
      throw {
        error: "Password user salah.",
      };
    }

    throw {
      error: "User tidak terdaftar.",
    };
  };

  const logout = async () => {
    setUserInfo({});
    await AsyncStorage.removeItem("currUser");
  };

  const getUserList = async () => {
    const usersString = await AsyncStorage.getItem("users");
    if (usersString) return JSON.parse(usersString);
    return usersString;
  };

  const isLoggedIn = async () => {
    const currUser = await AsyncStorage.getItem("currUser");

    if (currUser) {
      const user = JSON.parse(currUser);
      setUserInfo(user);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, register, userInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
