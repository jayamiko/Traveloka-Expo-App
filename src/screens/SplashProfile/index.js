import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Profile } from "../../assets";
import { colors, hp, wp } from "../../constants";

export const SplashProfile = ({ navigation }) => {
  const icons = [
    // require("../../assets/icon/png/whatsapp.png"),
    require("../../assets/icon/png/linkedin.png"),
    require("../../assets/icon/png/github.png"),
    require("../../assets/icon/png/instagram.png"),
    // require("../../assets/icon/png/twitter.png"),
    // require("../../assets/icon/png/facebook.png"),
    require("../../assets/icon/png/youtube.png"),
  ];

  return (
    <View style={styles.page}>
      <Image source={Profile} style={styles.image} />
      <View style={styles.colCenter}>
        <Text style={styles.name}>Jaya Miko Yoga Pratama</Text>
        <Text style={styles.connectWithMe}>Connect with me:</Text>
        <View style={styles.rowCenter}>
          <Image
            source={require("../../assets/icon/png/linkedin.png")}
            style={{ width: 24, height: 32, marginHorizontal: wp(2) }}
          />
          <Image
            source={require("../../assets/icon/png/github.png")}
            style={{ width: 24, height: 24, marginHorizontal: wp(2) }}
          />
          <Image
            source={require("../../assets/icon/png/instagram.png")}
            style={{ width: 24, height: 24, marginHorizontal: wp(2) }}
          />
          <Image
            source={require("../../assets/icon/png/youtube.png")}
            style={{ width: 24, height: 32, marginHorizontal: wp(2) }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.blue2,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 160,
    height: 160,
    borderWidth: 4,
    borderColor: colors.white,
    borderRadius: 160,
  },
  colCenter: {
    flexDirection: "column",
    alignItems: "center",
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 32,
    height: hp(3.8),
    marginRight: 8,
  },
  name: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  connectWithMe: {
    color: colors.white,
    fontWeight: "600",
    marginVertical: 10,
  },
});
