import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import OrderList from "../components/OrderList";

const OrderScreen = () => {
  const navigation = useNavigation();
  const [filters, setFilters] = useState([
    { id: 1, title: "Semua", active: true },
    { id: 2, title: "URide", active: false },
    { id: 3, title: "UCar", active: false },
    { id: 4, title: "UFood", active: false },
    { id: 5, title: "USend", active: false },
    { id: 6, title: "UMart", active: false },
    { id: 7, title: "UPulsa", active: false },
  ]);

  const orders = [
    {
      id: 1,
      orderId: "#UR-2024-001",
      category: "URide",
      status: "Selesai",
      dateTime: {
        date: "26 Okt 2025",
        time: "19.30",
      },
      totalPayment: "53.000",
      orderDetails: {
        from: "Jl. Raya Darmo No. 123",
        destination: "Mall Tunjungan Plaza 4",
        distance: "5.2 km",
        driver: {
          name: "Budi Santoso",
          rating: 3,
        },
      },
    },
    {
      id: 2,
      orderId: "#UC-2024-212",
      category: "UCar",
      status: "Proses",
      dateTime: {
        date: "3 Nov 2025",
        time: "7.45",
      },
      totalPayment: "64.000",
      orderDetails: {
        from: "Jl. Raya Darmo No. 123",
        destination: "UPN Veteran Jawa Timur",
        distance: "10.5 km",
        driver: {
          name: "Ari Wibowo",
          rating: 4,
        },
      },
    },
    {
      id: 3,
      orderId: "#UF-2024-089",
      category: "UFood",
      status: "Selesai",
      dateTime: {
        date: "30 Okt 2025",
        time: "20.00",
      },
      totalPayment: "45.000",
      orderDetails: {
        restaurant: "Ayam Geprek Bensu",
        from: "Ayam Geprek Bensu - Surabaya",
        destination: "Jl. Raya Darmo No. 123",
        orders: ["2x Ayam Geprek Level 5", "1x Es Teh Manis"],
        driver: {
          name: "Ahmad Rizki",
          rating: 4,
        },
      },
    },
    {
      id: 4,
      orderId: "#UM-2024-227",
      category: "UMart",
      status: "Selesai",
      dateTime: {
        date: "1 Okt 2025",
        time: "9.30",
      },
      totalPayment: "66.500",
      orderDetails: {
        mart: "Indomaret - Cahwiguna",
        from: "Indomaret - Cahwiguna",
        destination: "Jl. Raya Darmo No. 123",
        orders: ["2x Le Minerale Air Botol Mineral 15L"],
        driver: {
          name: "Ryan Santoso",
          rating: 5,
        },
      },
    },
    {
      id: 5,
      orderId: "#US-2025-234",
      category: "USend",
      status: "Proses",
      dateTime: {
        date: "12 Okt 2025",
        time: "8.00",
      },
      totalPayment: "53.000",
      orderDetails: {
        item: "Dokumen Penting",
        from: "Jl. Raya Darmo No. 123",
        destination: "Jl. Raya Darmo No. 125",
        weight: "0.5 kg",
        driver: {
          name: "Dedi Wahyudi",
          rating: 5,
        },
      },
    },
    {
      id: 6,
      orderId: "#UP-2025-001",
      category: "UPulsa",
      status: "Dibatalkan",
      dateTime: {
        date: "26 Okt 2025",
        time: "19.30",
      },
      totalPayment: "53.000",
      orderDetails: {
        provider: "Indosat",
        numDestination: "0812-3456-7890",
      },
    },
  ];

  const [selectedOrders, setSelectedOrders] = useState(orders);

  const setActive = (category) => {
    const newFilters = filters.map((filter) => {
      if (filter.title == category) return { ...filter, ["active"]: true };
      else return { ...filter, ["active"]: false };
    });

    setFilters(newFilters);
  };

  const filterOrders = (category) => {
    setActive(category);
    if (category == "Semua") {
      setSelectedOrders(orders);
    } else {
      const selectedOrders = orders.filter(
        (order) => order.category == category
      );
      setSelectedOrders(selectedOrders);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 15,
          paddingVertical: 50,
          backgroundColor: "#5ecc5bff",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
              marginBottom: 15,
            }}
          >
            Riwayat Pesanan
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "300",
              color: "white",
            }}
          >
            Total {orders.length} pesanan
          </Text>
        </View>

        <TouchableOpacity>
          <View
            style={{
              width: 35,
              height: 35,
              borderRadius: 10,
              backgroundColor: "rgba(214, 211, 211, 0.5)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon icon={faCalendar} size={25} color="white" />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: -25,
          marginBottom: 10,
          marginHorizontal: 10,
          padding: 10,
          backgroundColor: "white",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          elevation: 5,
        }}
      >
        <ScrollView horizontal={true}>
          <View style={{ alignSelf: "center", margin: 5 }}>
            <FontAwesomeIcon icon={faFilter} color="#4b4a4aff" />
          </View>
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter.id.toString()}
              onPress={() => filterOrders(filter.title)}
            >
              <View
                style={[
                  styles.filterContainer,
                  {
                    backgroundColor: filter.active ? "#5ecc5bff" : "#e7e5e5ff",
                  },
                ]}
              >
                <Text
                  style={{
                    fontWeight: "500",
                    color: filter.active ? "white" : "#4b4a4aff",
                  }}
                >
                  {filter.title}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <ScrollView>
        <OrderList orders={selectedOrders} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    width: 70,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OrderScreen;
