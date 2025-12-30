import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AuthContext } from "../authentication/AuthContext";

const RegisterScreen = () => {
  const { register } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [registerError, setRegisterError] = useState("");

  const onChangeUserInfo = (field, newText) => {
    setUserInfo({ ...userInfo, [field]: newText });
  };

  const toLoginPage = async () => {
    if (
      userInfo.name === "" ||
      userInfo.email === "" ||
      userInfo.password == ""
    ) {
      setRegisterError("* Username atau email atau Sandi Tidak Boleh Kosong");
    } else {
      await register(userInfo);
      navigation.navigate("LoginScreen");
    }
  };

  const userInfoForm = [
    {
      id: 1,
      keyboardType: "default",
      textContentType: "name",
      secureTextEntry: false,
      placeholder: "Nama Lengkap",
      title: "name",
    },
    {
      id: 2,
      keyboardType: "email-address",
      textContentType: "emailAddress",
      secureTextEntry: false,
      placeholder: "Email",
      title: "email",
    },
    {
      id: 3,
      keyboardType: "password",
      textContentType: "password",
      secureTextEntry: true,
      placeholder: "Password",
      title: "password",
    },
  ];

  const navigation = useNavigation();
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
          <Text style={styles.registerText}>Register Akun</Text>
        </View>

        <FlatList
          data={userInfoForm}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.registerForm}>
              <TextInput
                style={{ color: "black" }}
                value={userInfo[item.title]}
                onChangeText={(newText) =>
                  onChangeUserInfo(item.title, newText)
                }
                placeholder={item.placeholder}
                placeholderTextColor={"#a09d9dff"}
                keyboardType={item.keyboardType}
                textContentType={item.textContentType}
                secureTextEntry={item.secureTextEntry}
              />
            </View>
          )}
        />

        <TouchableOpacity onPress={() => toLoginPage()}>
          <View style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Daftar</Text>
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
            {registerError}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  registerText: { fontSize: 24, fontWeight: "bold", textAlign: "center" },
  registerForm: {
    padding: 5,
    borderColor: "#a09d9dff",
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
  },
  registerButton: {
    backgroundColor: "#07ad52ff",
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  registerButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    textAlign: "center",
  },
});

export default RegisterScreen;
