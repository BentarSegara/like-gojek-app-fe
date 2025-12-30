import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRightToBracket,
  faUserPlus,
  faGear,
  faShield,
  faCircleQuestion,
  faFileText,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const services = [
    { id: 1, title: "Pengaturan", icon: faGear },
    { id: 2, title: "Bantuan", icon: faCircleQuestion },
    { id: 3, title: "Syarat dan Ketentuan", icon: faFileText },
    { id: 4, title: "Kebijakan Privasi", icon: faShield },
  ];
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={styles.underUserContainer}>
          <View style={styles.userContainer}>
            <FontAwesomeIcon icon={faUser} size={35} />
          </View>

          <View style={{ margin: 7 }}>
            <Text
              style={{ fontSize: 18, fontWeight: "500", textAlign: "center" }}
            >
              Belum Login
            </Text>
            <Text
              style={{ fontSize: 14, fontWeight: "300", textAlign: "center" }}
            >
              Silakan login atau daftar untuk mengakses fitur lengkap
            </Text>
          </View>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <View style={styles.loginButton}>
              <View style={styles.loginText}>
                <FontAwesomeIcon icon={faArrowRightToBracket} color="white" />
                <Text
                  style={{ fontSize: 16, color: "white", fontWeight: "500" }}
                >
                  Login
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <View style={styles.signupButton}>
              <View style={styles.signUpContainer}>
                <FontAwesomeIcon icon={faUserPlus} color="#07ad52ff" />
                <Text style={styles.signUpText}>Daftar Akun</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          data={services}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View style={styles.servicesContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    style={{ marginRight: 5 }}
                  />
                  <Text style={{ fontSize: 16, fontWeight: "500" }}>
                    {item.title}
                  </Text>
                </View>

                <View>
                  <FontAwesomeIcon icon={faChevronRight} />
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    width: 90,
    height: 90,
    margin: 7,
    borderRadius: 50,
    backgroundColor: "#ddddddff",
    justifyContent: "center",
    alignItems: "center",
  },
  underUserContainer: {
    flex: 0.8,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#07ad52ff",
    alignItems: "center",
  },
  loginText: {
    width: "20%",
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  signupButton: {
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "white",
    borderColor: "#07ad52ff",
    borderWidth: 2,
    alignItems: "center",
  },
  signUpText: {
    fontSize: 16,
    color: "#07ad52ff",
    fontWeight: "500",
    textAlign: "center",
  },
  signUpContainer: {
    width: "32%",
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  servicesContainer: {
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 3,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ProfileScreen;
