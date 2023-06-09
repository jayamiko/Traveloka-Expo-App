import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors, hp } from "../../../constants";
import BlueAccountSVG from "../../svgIcons/BlueAccountSVG";
import BlueSaveSVG from "../../svgIcons/BlueSaveSVG";
import SaveSVG from "../../svgIcons/SaveSVG";
import BlueOrder from "../../svgIcons/BlueOrder";
import OrderSVG from "../../svgIcons/OrderSVG";
import BlueInboxSVG from "../../svgIcons/BlueInboxSVG";
import InboxSVG from "../../svgIcons/InboxSVG";
import AccountSVG from "../../svgIcons/AccountSVG";
import { Image } from "react-native";

const TravelokaIcon = () => {
  return (
    <Image
      source={require("../../../assets/icon/png/traveloka-icon.png")}
      style={{ width: 24, height: hp(3) }}
    />
  );
};

const TabItem = ({ title, active, onPress, onLongPress }) => {
  const Icon = () => {
    if (title === "Awal") {
      return active ? <TravelokaIcon /> : <TravelokaIcon />;
    }
    if (title === "Simpan") {
      return active ? <BlueSaveSVG /> : <SaveSVG />;
    }
    if (title === "Pesanan") {
      return active ? <BlueOrder /> : <OrderSVG />;
    }
    if (title === "Inbox") {
      return active ? <BlueInboxSVG /> : <InboxSVG />;
    }
    if (title === "Akun") {
      return active ? <BlueAccountSVG /> : <AccountSVG />;
    }
    return active ? <TravelokaIcon /> : <TravelokaIcon />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}
    >
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    flex: 1,
    paddingVertical: hp(1),
  },
  text: (active) => ({
    fontSize: hp(1.5),
    color: active ? colors.blue3 : colors.grayMuda,
  }),
});
