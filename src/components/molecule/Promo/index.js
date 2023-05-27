import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Gap } from "../../atoms";
import SwiperImages from "../SwiperImages";
import { discons, hp, worldTours, wp } from "../../../constants";
import { BgPromo, TravelFairBanner } from "../../../assets";

export function TravelFairPromo(props) {
  return (
    <View style={styles.backgroundPromoSize}>
      <Image source={BgPromo} style={styles.backgroundPromoSize} />
      <View style={styles.container}>
        <Image source={TravelFairBanner} style={styles.travelFairBanner} />
        <Gap height={hp(2)} />
        <SwiperImages data={discons} />
        <Gap height={hp(4)} />
        <SwiperImages data={worldTours} />
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonGreen}
            onPress={() => props.navigation.navigate("TravelFair")}
          >
            <Text style={styles.buttonText}>Lihat Semua Promo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    paddingHorizontal: wp(2),
    marginTop: 100,
  },
  backgroundPromoSize: {
    position: "relative",
    height: 720,
    width: "100%",
  },
  travelFairBanner: {
    height: 200,
    width: "100%",
    borderRadius: 10,
  },
  button: {
    width: "100%",
    marginVertical: 10,
  },
  buttonGreen: {
    backgroundColor: "#C9E93C",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 16,
  },
});
