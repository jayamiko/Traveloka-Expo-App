import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { colors, hp, wp } from "../../../constants";
import { Divide } from "../../atoms";
import { IconText } from "../../atoms";
import ImageSlider from "../ImageSlider/index";

function Drawer({ item, navigation }) {
  return (
    <View style={styles.navigationContainer}>
      <Divide />
      <View style={styles.boxTags}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Pembatalan Gratis</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Sarapan Gratis</Text>
        </View>
      </View>
      <View style={styles.announcement}>
        <View style={[styles.boxRow, { alignItems: "center" }]}>
          <View style={[styles.boxRow, { width: "100%" }]}>
            <View style={[styles.boxRow, { width: "85%" }]}>
              <Image
                source={require("../../../assets/icon/png/bg-refund-icon.png")}
                style={styles.iconRefund}
              />
              <Text style={styles.note}>
                Harus berpergian di tengah ketidakpastian? Pilih kamar dengan
                gratis pembatalan!
              </Text>
            </View>
            {/* <View
              style={[
                styles.boxCenter,
                {
                  width: "10%",
                },
              ]}
            >
              <View style={styles.circle}>
                <Text style={styles.questionMark}>?</Text>
              </View>
            </View> */}
          </View>
        </View>
      </View>
      <View style={styles.background}>
        <View style={styles.card}>
          <ImageSlider />
          <View style={styles.cardInfo}>
            <Text style={styles.nameBed}>Grand Delux King</Text>
            <IconText
              iconSource={require("../../../assets/icon/png/rule-icon.png")}
              text="37.0 m2 - Dengan Bathub"
              styleIcon={{ width: 32, height: 36 }}
              color={colors.black}
              fontSize={11}
            />
          </View>
          <View style={styles.description}>
            <View style={styles.alertContainer}>
              <View style={styles.alertIcon}>
                <Image
                  style={{ width: 28, height: 36 }}
                  source={require("../../../assets/icon/png/refund-icon.png")}
                />
              </View>
              <Text style={{ color: "#00885A", fontSize: 12 }}>
                Gratis Pembatalan sebelum 03 Jun 13:00
              </Text>
            </View>
            <View
              style={[
                styles.boxRowBetween,
                {
                  marginVertical: 8,
                },
              ]}
            >
              <Text style={styles.title}>Grand Deluxe King Room Only</Text>
              <TouchableOpacity>
                <Text style={{ color: colors.blue3, fontWeight: "700" }}>
                  LIHAT DETAIL
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <IconText
                iconSource={require("../../../assets/icon/png/guest-icon.png")}
                text="2 tamu/kamar"
                color={colors.black}
                fontSize={11}
              />
              <IconText
                iconSource={require("../../../assets/icon/png/bed-icon.png")}
                text="1 double bed atau 2 single bed"
                color={colors.black}
                fontSize={11}
              />
            </View>
            <View style={{ marginTop: 8 }}>
              <View style={styles.boxRowBetween}>
                <IconText
                  iconSource={require("../../../assets/icon/png/not-breakfest-icon.png")}
                  text="Tidak termasuk sarapan"
                  fontSize={11}
                />
                <Text style={[styles.lineTrought, styles.textDescription]}>
                  {item.normalPrice}
                </Text>
              </View>
              <View style={styles.boxRowBetween}>
                <IconText
                  iconSource={require("../../../assets/icon/png/refund-icon.png")}
                  text="Pembatalan Gratis"
                  color={colors.green}
                  fontSize={11}
                />
                <Text style={styles.price}>{item.price}</Text>
              </View>
              <View style={styles.boxRowBetween}>
                <IconText
                  iconSource={require("../../../assets/icon/png/reschdule-icon.png")}
                  text="Bisa Reschdule"
                  color={colors.green}
                  fontSize={11}
                />
                <Text style={styles.textDescription}>/kamar/malam</Text>
              </View>
              <View style={styles.boxRowBetween}>
                <IconText
                  iconSource={require("../../../assets/icon/png/wifi-icon.png")}
                  text="WiFi Gratis"
                  color={colors.green}
                  fontSize={11}
                />
              </View>
              <View style={[styles.boxRow, { justifyContent: "flex-end" }]}>
                <View
                  style={[
                    styles.boxCol,
                    {
                      alignItems: "flex-end",
                    },
                  ]}
                >
                  <Text style={[styles.smallText, styles.orangeText]}>
                    Sisa 1 Kamar!
                  </Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("SplashProfile")}
                  >
                    <Text style={styles.buttonText}>Pilih</Text>
                  </TouchableOpacity>
                  <View style={styles.boxRow}>
                    <Image
                      source={require("../../../assets/icon/png/coin-icon.png")}
                      style={styles.icon}
                    />
                    <Text style={styles.smallText}>
                      Dapatkan
                      <Text style={[styles.smallText, { color: colors.blue2 }]}>
                        {" "}
                        6750 Priority Points
                      </Text>
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navigationContainer: {
    width: 400,
    height: 750,
    backgroundColor: colors.white,
  },
  boxRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  boxRowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  boxCol: {
    flexDirection: "column",
  },
  boxCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  boxTags: {
    width: "100%",
    height: 50,
    padding: wp(2),
    flexDirection: "row",
    alignItems: "center",
  },
  smallText: {
    fontSize: 11,
  },
  orangeText: {
    color: colors.orange,
  },
  tag: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    borderRadius: 4,
    backgroundColor: colors.concrete,
    paddingHorizontal: 14,
  },
  tagText: {
    color: colors.blue4,
    fontWeight: "bold",
  },
  announcement: {
    height: 65,
    backgroundColor: colors.blue4,
    paddingHorizontal: wp(2),
    justifyContent: "center",
  },
  note: {
    color: colors.white,
    marginHorizontal: wp(3),
    fontSize: 14,
  },
  questionMark: {
    fontSize: 10,
    color: colors.blue4,
    fontWeight: "500",
  },
  background: {
    backgroundColor: colors.concrete,
    paddingHorizontal: wp(2),
    marginTop: hp(1),
  },
  circle: {
    width: 15,
    height: 15,
    backgroundColor: colors.white,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  cardInfo: {
    backgroundColor: colors.concrete,
    paddingVertical: 8,
    paddingHorizontal: wp(2),
  },
  nameBed: {
    fontSize: 16,
    marginVertical: 5,
    color: colors.black,
    fontWeight: "500",
  },
  icon: {
    width: 16,
    height: hp(3),
    marginRight: 8,
  },
  iconRefund: {
    position: "relative",
    width: 26,
    height: hp(6),
  },
  text: {
    fontSize: 12,
    color: colors.grayMuda,
    marginVertical: 8,
  },
  alertContainer: {
    width: "80%",
    flexDirection: "row",
    backgroundColor: "#E8FDF4",
    borderWidth: 0.5,
    borderColor: "#00885A",
    borderRadius: 8,
    alignItems: "center",
  },
  alertIcon: {
    paddingHorizontal: wp(2),
  },
  description: {
    paddingHorizontal: wp(2),
  },
  title: {
    color: colors.black,
    fontWeight: "500",
  },
  lineTrought: {
    fontSize: 12,
    color: colors.grayMuda,
    textDecorationLine: "line-through",
  },
  price: {
    fontSize: 16,
    color: colors.orange,
    fontWeight: "600",
  },
  textDescription: {
    fontSize: 11,
  },
  button: {
    backgroundColor: colors.orange,
    width: 75,
    paddingVertical: 6,
    borderRadius: 6,
    marginVertical: 2,
  },
  buttonText: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "600",
  },
});

export default Drawer;
