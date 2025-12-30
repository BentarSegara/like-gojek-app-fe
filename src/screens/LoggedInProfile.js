import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faGear,
  faShield,
  faCircleQuestion,
  faFileText,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { LogOut } from "lucide-react-native";
import React, { useContext } from "react";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AuthContext } from "../authentication/AuthContext";

const LoggedInProfile = () => {
  const { logout, userInfo } = useContext(AuthContext);
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
          backgroundColor: "#5ecc5bff",
          paddingVertical: 50,
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
          Profil Saya
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "300", color: "white" }}>
          Kelola informasi akun Anda
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 15,
          marginTop: -30,
          padding: 20,
          backgroundColor: "white",
          borderRadius: 10,
          elevation: 5,
        }}
      >
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 50,
            backgroundColor: "#22c55e",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon icon={faUser} size={30} color="white" />
        </View>

        <View
          style={{
            marginHorizontal: 10,
            paddingVertical: 5,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {userInfo.name}
          </Text>
          <Text>{userInfo.email}</Text>
          <Text>+62 812-3456-7890</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          margin: 15,
          padding: 20,
          backgroundColor: "white",
          elevation: 5,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderEndWidth: 1,
            borderEndColor: "#c7c2c2ff",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "green" }}>
            12
          </Text>
          <Text>Pesanan</Text>
        </View>

        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "green" }}>
            5
          </Text>
          <Text>Ulasan</Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderStartWidth: 1,
            borderStartColor: "#c7c2c2ff",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "green" }}>
            350
          </Text>
          <Text>Poin</Text>
        </View>
      </View>

      <View style={{ borderRadius: 10 }}>
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
      <TouchableOpacity onPress={logout}>
        <View
          style={[
            styles.servicesContainer,
            {
              justifyContent: "center",
              marginVertical: 15,
              borderRadius: 10,
            },
          ]}
        >
          <LogOut size={18} color={"#cc1010ff"} style={{ marginRight: 5 }} />
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#cc1010ff" }}>
            Keluar
          </Text>
        </View>
      </TouchableOpacity>
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
    backgroundColor: "#e03838ff",
    alignItems: "center",
  },
  loginText: {
    width: "21%",
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
    borderColor: "#e03838ff",
    borderWidth: 2,
    alignItems: "center",
  },
  signUpText: {
    fontSize: 16,
    color: "#e03838ff",
    fontWeight: "500",
    textAlign: "center",
  },
  signUpContainer: {
    width: "40%",
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

export default LoggedInProfile;

{
  /* <View>
        <View
          style={{
            backgroundColor: "green",
            height: "35%",
            paddingVertical: 25,
            paddingHorizontal: 15,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
            Profil Saya
          </Text>
          <Text>{""}</Text>
          <Text style={{ fontSize: 16, fontWeight: "300", color: "white" }}>
            Kelola informasi akun Anda
          </Text>
        </View>

        
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 15,
            marginTop: -30,
            padding: 20,
            backgroundColor: "white",
            borderRadius: 10,
            elevation: 5,
          }}
        >
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 50,
              backgroundColor: "green",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon icon={faUser} size={30} color="white" />
          </View>

          <View
            style={{
              marginHorizontal: 10,
              paddingVertical: 5,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Ahmad Hidayat
            </Text>
            <Text>ahmadhidayat@gmail.com</Text>
            <Text>+62 812-3456-7890</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            // justifyContent: "space-around",
            margin: 15,
            padding: 20,
            backgroundColor: "white",
            elevation: 5,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderEndWidth: 1,
              borderEndColor: "#c7c2c2ff",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "green" }}>
              12
            </Text>
            <Text>Pesanan</Text>
          </View>

          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "green" }}>
              5
            </Text>
            <Text>Ulasan</Text>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderStartWidth: 1,
              borderStartColor: "#c7c2c2ff",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "green" }}>
              350
            </Text>
            <Text>Poin</Text>
          </View>
        </View>
      </View>

      <View>
        <View>
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
        <TouchableOpacity>
          <View
            style={[
              styles.servicesContainer,
              { justifyContent: "center", marginVertical: 15 },
            ]}
          >
            <LogOut size={18} color={"#cc1010ff"} style={{ marginRight: 5 }} />
            <Text
              style={{ fontSize: 16, fontWeight: "500", color: "#cc1010ff" }}
            >
              Keluar
            </Text>
          </View>
        </TouchableOpacity>
      </View> */
}
