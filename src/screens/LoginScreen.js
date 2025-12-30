import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AuthContext } from "../authentication/AuthContext";

const LoginScreen = () => {
  const navigation = useNavigation();
  const { login } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLogginError] = useState("");

  const auth = async () => {
    try {
      await login({ email: userInfo.email, password: userInfo.password });
      return true;
    } catch (err) {
      setLogginError(err.error);
      return false;
    }
  };

  const toHomePage = async () => {
    if (userInfo.email === "" || userInfo.password === "") {
      setLogginError("* Email atau Sandi Tidak Boleh Kosong");
    } else {
      const isAuth = await auth();
      if (isAuth) navigation.navigate("BottomTabBar");
    }
  };

  const onChangeUserInfo = (field, text) => {
    setUserInfo({ ...userInfo, [field]: text });
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          margin: 10,
          padding: 10,
        }}
      >
        <View style={{ padding: 5, margin: 5 }}>
          <Text style={styles.loginText}>Login</Text>
        </View>

        <View style={styles.loginForm}>
          <TextInput
            value={userInfo.email}
            onChangeText={(newText) => onChangeUserInfo("email", newText)}
            placeholder="Email"
            placeholderTextColor={"#a09d9dff"}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.loginForm}>
          <TextInput
            value={userInfo.password}
            onChangeText={(newText) => onChangeUserInfo("password", newText)}
            placeholder="Password"
            placeholderTextColor={"#a09d9dff"}
            keyboardType="default"
            textContentType="password"
            secureTextEntry={true}
            style={{ color: "#1e1e1e" }}
          />
        </View>

        <TouchableOpacity onPress={() => toHomePage()}>
          <View style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Masuk</Text>
          </View>
        </TouchableOpacity>

        <View>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              textAlign: "center",
              color: "#e05050ff",
            }}
          >
            {loginError}
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Belum punyak akun ?{" "}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
          <Text
            style={{ fontSize: 16, fontWeight: "bold", color: "#07ad52ff" }}
          >
            Daftar Sekarang
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginText: { fontSize: 24, fontWeight: "bold", textAlign: "center" },
  loginForm: {
    padding: 5,
    borderColor: "#a09d9dff",
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
  },
  loginButton: {
    backgroundColor: "#07ad52ff",
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    textAlign: "center",
  },
});

export default LoginScreen;
