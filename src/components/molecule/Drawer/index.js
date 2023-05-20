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
                source={require("../../../assets/icon/png/traveloka-icon.png")}
                style={styles.iconRefund}
              />
              <Text style={styles.note}>
                Tip: Tambah Jaminan Refund. Jika pesanan harus dibatalkan, Anda
                tetap dapat 80% refund
              </Text>
            </View>
            <View
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
            </View>
          </View>
        </View>
      </View>
      <View style={styles.background}>
        <View style={styles.card}>
          <ImageSlider />
          <View style={styles.cardInfo}>
            <Text style={styles.superior}>Superior</Text>
            <IconText
              iconSource={require("../../../assets/icon/png/traveloka-icon-blue.png")}
              text="37.0 m2 - Dengan Bathub"
              color={colors.black}
              fontSize={11}
            />
          </View>
          <View style={styles.description}>
            <View style={styles.alertContainer}>
              <View style={styles.alertIcon}>
                <Image
                  style={styles.iconRefund}
                  source={require("../../../assets/icon/png/traveloka-icon.png")}
                />
              </View>
              <Text style={{ color: colors.blue2, fontSize: 12 }}>
                Opsi jaminan Refund tersedia
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
              <Text style={styles.title}>Superior Room Only</Text>
              <TouchableOpacity>
                <Text style={{ color: colors.blue4, fontWeight: "bold" }}>
                  LIHAT DETAIL
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <IconText
                iconSource={require("../../../assets/icon/png/traveloka-icon-blue.png")}
                text="2 tamu/kamar"
                color={colors.black}
                fontSize={11}
              />
              <IconText
                iconSource={require("../../../assets/icon/png/traveloka-icon-blue.png")}
                text="1 double bed atau 2 single bed"
                color={colors.black}
                fontSize={11}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <View style={styles.boxRowBetween}>
                <IconText
                  iconSource={require("../../../assets/icon/png/traveloka-icon-blue.png")}
                  text="Sarapan Gratis"
                  color={colors.green}
                  fontSize={11}
                />
                <Text style={[styles.lineTrought, styles.textDescription]}>
                  {item.normalPrice}
                </Text>
              </View>
              <View style={styles.boxRowBetween}>
                <IconText
                  iconSource={require("../../../assets/icon/png/traveloka-icon-blue.png")}
                  text="Tidak Bisa Refund"
                  color={colors.black}
                  fontSize={11}
                />
                <Text style={styles.price}>{item.price}</Text>
              </View>
              <View style={styles.boxRowBetween}>
                <IconText
                  iconSource={require("../../../assets/icon/png/traveloka-icon-blue.png")}
                  text="Tidak Bisa Reschdule"
                  color={colors.black}
                  fontSize={11}
                />
                <Text style={styles.textDescription}>/kamar/malam</Text>
              </View>
              <View style={styles.boxRowBetween}>
                <IconText
                  iconSource={require("../../../assets/icon/png/traveloka-icon-blue.png")}
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
                      source={require("../../../assets/icon/png/traveloka-icon-blue.png")}
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
    marginHorizontal: wp(2),
    fontSize: 12,
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
  superior: {
    fontSize: 16,
    color: colors.black,
    fontWeight: "500",
  },
  icon: {
    width: 16,
    height: hp(2.5),
    marginRight: 8,
  },
  iconRefund: {
    position: "relative",
    width: 16,
    height: hp(3),
  },
  text: {
    fontSize: 12,
    color: colors.grayMuda,
    marginVertical: 8,
  },
  alertContainer: {
    width: "65%",
    flexDirection: "row",
    backgroundColor: "#D8F2FF",
    borderWidth: 0.5,
    borderColor: colors.blue2,
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
