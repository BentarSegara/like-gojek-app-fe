import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faWallet,
  faLocationDot,
  faCarSide,
  faUtensils,
  faCube,
  faBagShopping,
  faMobile,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useContext } from "react";

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PromoCard from "../component/PromoCard";
import ServiceButton from "../component/ServiceButton";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { userInfo } = useContext(AuthContext);
  const services = [
    { id: 1, name: "URide", icon: faLocationDot, bgColor: "#3BCC57" },
    { id: 2, name: "UCar", icon: faCarSide, bgColor: "#4480FF" },
    { id: 3, name: "UFood", icon: faUtensils, bgColor: "#F0505A" },
    { id: 4, name: "USend", icon: faCube, bgColor: "#F5B925" },
    { id: 5, name: "UMart", icon: faBagShopping, bgColor: "#8F4AFF" },
    { id: 6, name: "UPulsa", icon: faMobile, bgColor: "#EB4A72" },
  ];

  const promos = [
    {
      id: 1,
      title: "Diskon 50 %",
      description: "Gratis ongkir untuk pengguna baru",
      category: "discount",
    },
    {
      id: 2,
      title: "Cashback 30K",
      description: "Minimal transaksi Rp.100.000",
      category: "special",
    },
    {
      id: 3,
      title: "Promo Spesial",
      description: "Hemat hingga Rp.75.000",
      category: "special",
    },
  ];

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.welcomeContainer}>
          <View>
            <Text style={styles.welcomeText1}>
              Selamat Datang,
            </Text>
            <Text style={styles.welcomeText2}>
              {userInfo.name ?? "Pengguna Ujek"}
            </Text>
          </View>

          <TouchableOpacity>
            <View style={styles.notifContainer}>
              <FontAwesomeIcon icon={faBell} color="white" size={25} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.balanceContainer}>
          <View
            style={styles.balanceRow}
          >
            <View style={styles.walletContainer}>
              <FontAwesomeIcon icon={faWallet} color="white" size={25} />
            </View>
            <View style={{ justifyContent: "space-evenly" }}>
              <Text style={{ fontWeight: "300" }}>Saldo UPay</Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Rp. 250.000
              </Text>
            </View>
          </View>

          <TouchableOpacity>
            <View style={styles.topUpContainer}>
              <Text style={styles.topUpText}>
                Top Up
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.serviceOuter}>
        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Layanan Kami</Text>
        </View>
        <View style={styles.serviceInner}>
          {services.map((service) => (
            <ServiceButton
              key={service.id.toString()}
              title={service.name}
              icon={service.icon}
              backgroundColor={service.bgColor}
            />
          ))}
        </View>
      </View>
      <View style={styles.marginContainer}>
        <View
          style={styles.promoHeaderRow}
        >
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Promo Spesial
            </Text>
          </View>

          <TouchableOpacity
            style={styles.seeAllRow}
          >
            <Text style={styles.seeAllText}>Lihat Semua</Text>
            <FontAwesomeIcon
              icon={faChevronRight}
              size={12}
              color="#5ecc5bff"
              style={{ marginLeft: 5 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.promoContainer}>
          <PromoCard
            title={promos[0].title}
            description={promos[0].description}
            category={promos[0].category}
          />
          <PromoCard
            title={promos[1].title}
            description={promos[1].description}
            category={promos[1].category}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    paddingVertical: 30,
    paddingHorizontal: 10,
    backgroundColor: "#5ecc5bff",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcomeContainer: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
  },
  notifContainer: {
    width: 30,
    height: 30,
    marginTop: 5,
    borderRadius: 100,
    backgroundColor: "rgba(214, 211, 211, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  balanceContainer: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
  },
  walletContainer: {
    width: 50,
    height: 50,
    backgroundColor: "#5ecc5bff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  topUpContainer: {
    backgroundColor: "#5ecc5bff",
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  serviceOuter: {
    marginTop: -25,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 20,
    alignSelf: "center",
    elevation: 5,
  },
  serviceInner: {
    width: "90%",
    marginVertical: 10,
    justifyContent: "center",
    alignSelf: "center",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  seeAllText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#5ecc5bff",
    marginLeft: 10,
  },
  promoContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  welcomeText1: {
    fontSize: 16,
    fontWeight: "300",
    color: "white",
  },
  welcomeText2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  balanceRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  topUpText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
  marginContainer: {
    margin: 15,
    padding: 10,
  },
  promoHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  seeAllRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Home;
