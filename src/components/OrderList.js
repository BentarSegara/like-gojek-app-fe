import {
  faCube,
  faCarSide,
  faChevronRight,
  faClock,
  faLocationDot,
  faMapLocationDot,
  faMobile,
  faBagShopping,
  faStar,
  faUtensils,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export function BasicInfo({ basicInfo }) {
  const status = basicInfo.status;
  const statusProperty = {
    Selesai: { backgroundColor: "#d0f7d0ff", color: "#467e46ff" },
    Proses: { backgroundColor: "#f8f07eff", color: "#7c6e1eff" },
    Dibatalkan: { backgroundColor: "#fda1a1ff", color: "#ad1610ff" },
  };
  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={[
          styles.iconContainer,
          { backgroundColor: basicInfo.backgroundColorIcon },
        ]}
      >
        <FontAwesomeIcon icon={basicInfo.icon} size={20} color="white" />
      </View>
      <View style={styles.basicInfoContainer}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {basicInfo.service}
          </Text>
          <View
            style={[
              styles.orderStatusContainer,
              { backgroundColor: statusProperty[status].backgroundColor },
            ]}
          >
            <Text
              style={[
                styles.orderStatusText,
                { color: statusProperty[status].color },
              ]}
            >
              {status}
            </Text>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 12, fontWeight: "300" }}>
            {basicInfo.orderId}
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 5 }}>
        <FontAwesomeIcon icon={faChevronRight} size={15} color="#888383ff" />
      </View>
    </View>
  );
}

export function DeliveryInfo({ deliveryInfo }) {
  const detailsOrder = deliveryInfo.detailsOrder;
  return (
    <View style={{ marginVertical: 5 }}>
      <View>
        <Text style={{ fontWeight: "bold" }}>{deliveryInfo.title}</Text>
      </View>
      {detailsOrder.map((detail) => (
        <View
          key={detail.id}
          style={{
            flexDirection: "row",
            marginVertical: 5,
          }}
        >
          <View style={{ margin: 2 }}>
            <FontAwesomeIcon icon={detail.icon} color={detail.color} />
          </View>
          <View>
            <Text style={{ fontWeight: "300" }}>{detail.text}</Text>
            <Text>{detail.content}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

export function OtherInfo({ otherInfo }) {
  const driver = otherInfo.driver;
  return (
    <>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.dateTimeContainer}>
          <FontAwesomeIcon
            icon={faClock}
            color="#888383ff"
            style={{ marginRight: 5 }}
          />
          <Text style={{ fontWeight: "300" }}>
            {otherInfo.date} . {otherInfo.time}
          </Text>
        </View>
        <View>
          <Text style={{ fontWeight: "300" }}>
            {otherInfo.distanceOrWeight}
          </Text>
        </View>
      </View>

      <View style={styles.paymentContainer}>
        <View>
          {otherInfo.driver !== "" ? (
            <>
              <Text style={{ fontWeight: "300" }}>{driver.name}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    size={13}
                    color={
                      index >= otherInfo.driver.rating
                        ? "#b9b2b2ff"
                        : "#f3ac13ff"
                    }
                  />
                ))}
                <Text style={{ marginLeft: 5 }}>{driver.rating}</Text>
              </View>
            </>
          ) : (
            <View>
              <Text>{""}</Text>
            </View>
          )}
        </View>
        <View>
          <Text style={{ fontWeight: "300" }}>Total Pembayaran</Text>
          <Text style={{ fontSize: 18, fontWeight: "500", color: "#52a152ff" }}>
            Rp. {otherInfo.totalPayment}
          </Text>
        </View>
      </View>
    </>
  );
}

const OrderList = ({ orders }) => {
  const detailsOrder = {
    from: { icon: faMapLocationDot, color: "#5ecc5bff", text: "Dari" },
    destination: { icon: faLocationDot, color: "crimson", text: "Ke" },
    orders: { icon: faReceipt, color: "#888383ff", text: "Detail Pesanan" },
    numDestination: {
      icon: faMobile,
      color: "#888383ff",
      text: "Nomor Tujuan",
    },
  };
  const basicTemplate = {
    URide: {
      icon: faLocationDot,
      backgroundColor: "#3BCC57",
      title: "Perjalanan ke ",
    },
    UCar: {
      icon: faCarSide,
      backgroundColor: "#4480FF",
      title: "Perjalanan ke ",
    },
    UFood: { icon: faUtensils, backgroundColor: "#F0505A", title: "" },
    UMart: { icon: faBagShopping, backgroundColor: "#8F4AFF", title: "" },
    USend: { icon: faCube, backgroundColor: "#F5B925", title: "Pengiriman " },
    UPulsa: { icon: faMobile, backgroundColor: "#EB4A72", title: "Pulsa " },
  };

  const titleTemplate = (orderDetails, category) => {
    if (category == "URide" || category == "UCar")
      return `${basicTemplate[category].title}${orderDetails.destination}`;
    else if (category == "USend")
      return `${basicTemplate[category].title}${orderDetails.item}`;
    else if (category == "UFood")
      return `${basicTemplate[category].title}${orderDetails.restaurant}`;
    else if (category == "UMart")
      return `${basicTemplate[category].title}${orderDetails.mart}`;
    if (category == "UPulsa")
      return `${basicTemplate[category].title}${orderDetails.provider}`;
  };

  const orderDetailsTemplate = (orderDetails, category) => {
    if (category == "URide" || category == "UCar" || category == "USend") {
      return [
        {
          id: 1,
          ...detailsOrder["from"],
          content: orderDetails.from,
        },
        {
          id: 2,
          ...detailsOrder["destination"],
          content: orderDetails.destination,
        },
      ];
    } else if (category == "UFood" || category == "UMart") {
      return [
        {
          id: 1,
          ...detailsOrder["from"],
          content: orderDetails.from,
        },
        {
          id: 2,
          ...detailsOrder["destination"],
          content: orderDetails.destination,
        },
        {
          id: 3,
          ...detailsOrder["orders"],
          content: orderDetails.orders,
        },
      ];
    } else {
      return [
        {
          id: 1,
          ...detailsOrder["numDestination"],
          content: orderDetails.numDestination,
        },
      ];
    }
  };

  const template = (data) => {
    const orderDetails = data.orderDetails;
    const dateTime = data.dateTime;
    const basicInfo = {
      orderId: data.orderId,
      service: data.category,
      icon: basicTemplate[data.category].icon,
      backgroundColorIcon: basicTemplate[data.category].backgroundColor,
      status: data.status,
    };

    const deliveryInfo = {
      title: titleTemplate(orderDetails, data.category),
      detailsOrder: orderDetailsTemplate(orderDetails, data.category),
    };

    const otherInfo = {
      date: dateTime.date,
      time: dateTime.time,
      distanceOrWeight: orderDetails.distance ?? orderDetails.weight ?? "",
      totalPayment: data.totalPayment,
      driver: orderDetails.driver ?? "",
    };

    return {
      id: data.id,
      basicInfo: basicInfo,
      deliveryInfo: deliveryInfo,
      otherInfo: otherInfo,
    };
  };

  const orderList = orders.map((order) => template(order));

  return (
    <>
      {orderList.map((orderData) => (
        <View key={orderData.id} style={styles.outerContainer}>
          <View
            style={{
              padding: 10,
            }}
          >
            <TouchableOpacity>
              <BasicInfo basicInfo={orderData.basicInfo} />
            </TouchableOpacity>
            <DeliveryInfo deliveryInfo={orderData.deliveryInfo} />
          </View>

          <View
            style={{
              padding: 10,
              backgroundColor: "#fafafaff",
            }}
          >
            <OtherInfo otherInfo={orderData.otherInfo} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity style={styles.orderAgainButton}>
                <View style={{ padding: 12 }}>
                  <Text style={{ fontWeight: "500", color: "#5ecc5bff" }}>
                    Pesan Lagi
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.seeDetailButton}>
                <View style={{ padding: 12 }}>
                  <Text style={{ fontWeight: "500", color: "white" }}>
                    Lihat Detail
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: "white",
    elevation: 2,
    overflow: "hidden",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    padding: 15,
    // backgroundColor: "#5ecc5bff",
    elevation: 5,
  },
  basicInfoContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flex: 1,
  },
  orderStatusContainer: {
    marginLeft: 5,
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  orderStatusText: {
    fontSize: 12,
    fontWeight: "500",
  },
  dateTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  paymentContainer: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  orderAgainButton: {
    flex: 1,
    alignItems: "center",
    marginRight: 5,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#5ecc5bff",
  },
  seeDetailButton: {
    flex: 1,
    alignItems: "center",
    marginLeft: 5,
    borderRadius: 10,
    backgroundColor: "#5ecc5bff",
  },
});
export default OrderList;
