import React, { useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import {
  colors,
  hotelCountries,
  hotelRecomendation,
  hotels,
  hp,
  wp,
} from "../../constants";
import { LinearGradient } from "expo-linear-gradient";
import {
  ButtonIconOnly,
  ButtonTravelFairSingapura,
  Gap,
} from "../../components/atoms";
import {
  Card,
  Money,
  Menu,
  Header,
  Iklan,
  TravelFairPromo,
} from "../../components/molecule";
import ArrowRightSVG from "../../components/svgIcons/ArrowRightSVG";
import StaggerBounce from "../../components/animations/StaggerBounce";
import ImageIcon from "../../components/atoms/Image";

export const Main = ({ navigation }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    setIsScrolling(contentOffset.y > 0);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      onScroll={handleScroll}
      scrollEventThrottle={30}
    >
      <View style={styles.page}>
        <Header
          placeholder={"Cari item, destinasi, fitur..."}
          onPress={() => navigation.navigate("Simpan")}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          disableScrollViewPanResponder={true}
        >
          <View style={styles.topShape}></View>
          <View style={styles.pageView}>
            <View style={[styles.containerRow]}>
              <View style={styles.box}>
                <View style={styles.boxLabel}>
                  <Text style={styles.username}>Hai, Jaya Miko!</Text>
                  <LinearGradient
                    colors={[colors.blue, colors.blue2]}
                    start={[0, 0]}
                    end={[1, 0]}
                    style={styles.label}
                  >
                    <Text
                      style={[
                        styles.bold,
                        { color: colors.white, paddingHorizontal: 8 },
                      ]}
                    >
                      Be a part of PRIORITY {">"}
                    </Text>
                  </LinearGradient>
                </View>
                <View style={[styles.row, styles.paddingHz]}>
                  <Money />
                </View>
              </View>
            </View>
            <Menu />
            <Gap height={hp(1)} />
            <View style={styles.break} />
            <Gap height={hp(1)} />
            {/* XPERIENCE & HOTEL FILTER */}
            <View style={styles.hotel}>
              <View style={styles.rowBetween}>
                <Text style={styles.title}>Lihat lagi yang Anda minati</Text>
                <ButtonIconOnly>
                  <ArrowRightSVG />
                </ButtonIconOnly>
              </View>
              <View style={[styles.row, { marginVertical: 6 }]}>
                <TouchableOpacity
                  style={[styles.tag, { backgroundColor: colors.blue2 }]}
                  // onPress={() => setCategoryActive("Hotel")}
                >
                  <Text style={[styles.tagText, { color: colors.white }]}>
                    Hotel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.tag, { backgroundColor: colors.concrete }]}
                  // onPress={() => setCategoryActive("Xperience")}
                >
                  <Text style={[styles.tagText, { color: colors.blue2 }]}>
                    Xperience
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Gap width={wp(1.5)} />
                {hotels.map((item, index) => {
                  return (
                    <Card
                      key={index}
                      item={item}
                      onPress={() =>
                        navigation.navigate("StaycationDetail", {
                          item: item,
                        })
                      }
                    />
                  );
                })}
              </ScrollView>
            </View>
            <Gap height={hp(1)} />
            {/* HOTEL VISIT LIST */}
            <View style={styles.hotel}>
              <View style={styles.rowBetween}>
                <Text style={styles.title}>Hotel wajib dikunjungi</Text>
                <ButtonIconOnly icon={<ArrowRightSVG />} />
              </View>
            </View>
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Gap width={wp(1.5)} />
                {hotelRecomendation.map((item, index) => {
                  return (
                    <Card
                      key={index}
                      item={item}
                      onPress={() =>
                        navigation.navigate("StaycationDetail", {
                          item: item,
                        })
                      }
                    />
                  );
                })}
              </ScrollView>
            </View>
            <Gap height={hp(1)} />
            {/* TRAVEL FAIR PROMO BANNER */}
            <TravelFairPromo navigation={navigation} />
            <Gap height={hp(2)} />
            {/* TRAVEL FAIR BANNER */}
            <Iklan
              title="Travel Fair Goes to Kokas"
              sponsor={false}
              image={require("../../assets/promo/ticket-kokas.jpg")}
            />
            <Gap height={hp(2)} />
            <Iklan
              title="Garuda Online Travel Fair"
              sponsor={false}
              image={require("../../assets/promo/plain-ticket/promo-tiket-pesawat-3.jpg")}
            />
            <Gap height={hp(4)} />
            {/* HOTEL IN THE WORLD */}
            <View style={styles.hotel}>
              <View style={[styles.row, { alignItems: "center" }]}>
                <Text style={styles.title}>Beragam hotel di seluruh</Text>
                <ImageIcon
                  url={require("../../assets/icon/png/earth.png")}
                  width={32}
                  height={32}
                />
              </View>
              <View style={[styles.row, { marginVertical: 6 }]}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {hotelCountries.map((country, i) => {
                    return (
                      <TouchableOpacity
                        style={[
                          styles.tag,
                          {
                            backgroundColor:
                              country == "Singapura"
                                ? colors.blue2
                                : colors.concrete,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.tagText,
                            {
                              color:
                                country == "Singapura"
                                  ? colors.white
                                  : colors.blue2,
                            },
                          ]}
                        >
                          {country}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              </View>
            </View>
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Gap width={wp(1.5)} />
                {hotels.map((item, index) => {
                  return (
                    <Card
                      key={index}
                      item={item}
                      onPress={() =>
                        navigation.navigate("StaycationDetail", {
                          item: item,
                        })
                      }
                    />
                  );
                })}
              </ScrollView>
            </View>
            <ButtonTravelFairSingapura />
            <Gap height={hp(2)} />
            {/* ATRACTION VISIT */}
            <View style={styles.hotel}>
              <View style={styles.rowBetween}>
                <Text style={styles.title}>Jelajahi Keseruan Luar Negeri</Text>
                <ButtonIconOnly icon={<ArrowRightSVG />} />
              </View>
              <View style={[styles.row, { marginVertical: 6 }]}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {hotelCountries.map((country, i) => {
                    return (
                      <TouchableOpacity
                        style={[
                          styles.tag,
                          {
                            backgroundColor:
                              country == "Singapura"
                                ? colors.blue2
                                : colors.concrete,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.tagText,
                            {
                              color:
                                country == "Singapura"
                                  ? colors.white
                                  : colors.blue2,
                            },
                          ]}
                        >
                          {country}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              </View>
            </View>
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Gap width={wp(1.5)} />
                {hotels.map((item, index) => {
                  return (
                    <Card
                      key={index}
                      item={item}
                      onPress={() =>
                        navigation.navigate("StaycationDetail", {
                          item: item,
                        })
                      }
                    />
                  );
                })}
              </ScrollView>
            </View>
            <ButtonTravelFairSingapura />
            <Gap height={hp(2)} />
            {/* ATRACTION VISIT */}
            <View style={styles.hotel}>
              <View style={styles.rowBetween}>
                <Text style={styles.title}>Atraksi wajib dikunjungi</Text>
                <ButtonIconOnly icon={<ArrowRightSVG />} />
              </View>
            </View>
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Gap width={wp(1.5)} />
                {hotels.map((item, index) => {
                  return (
                    <Card
                      key={index}
                      item={item}
                      onPress={() =>
                        navigation.navigate("StaycationDetail", {
                          item: item,
                        })
                      }
                    />
                  );
                })}
              </ScrollView>
            </View>
            <Gap height={hp(2)} />
            {/* PLANE VISIT */}
            <View style={styles.hotel}>
              <View style={styles.rowBetween}>
                <Text style={styles.title}>Pilihan Penerbangan untuk Anda</Text>
                <ButtonIconOnly icon={<ArrowRightSVG />} />
              </View>
            </View>
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Gap width={wp(1.5)} />
                {hotels.map((item, index) => {
                  return (
                    <Card
                      key={index}
                      item={item}
                      onPress={() =>
                        navigation.navigate("StaycationDetail", {
                          item: item,
                        })
                      }
                    />
                  );
                })}
              </ScrollView>
            </View>
            <Gap height={hp(2)} />
            <Iklan
              title="Super Pesta Points!"
              sponsor={false}
              image={require("../../assets/promo/pesta-point.jpg")}
            />
          </View>
        </ScrollView>
      </View>
      {!isScrolling && (
        <StaggerBounce
          animatedValue={animatedValue}
          text="Terkini dari Traveloka"
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  page: {
    backgroundColor: colors.white,
  },
  pageView: {
    position: "relative",
    bottom: 40,
  },
  paddingHz: {
    paddingHorizontal: wp(2),
  },
  topShape: {
    backgroundColor: colors.blue2,
    height: 35,
    alignItems: "flex-start",
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
  },
  containerRow: {
    flexDirection: "column",
    paddingVertical: wp(2),
    margin: wp(2),
    backgroundColor: colors.white,
    borderRadius: 4,
    borderTopWidth: 1,
    borderTopColor: colors.black,
    borderLeftWidth: 1,
    borderLeftColor: colors.black,
    borderRightWidth: 1,
    borderRightColor: colors.black,
    borderBottomWidth: 6,
    borderBottomColor: colors.blue2,
  },
  box: {
    flexDirection: "column",
    backgroundColor: colors.white,
  },
  row: {
    flexDirection: "row",
  },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  username: {
    color: colors.gray,
    paddingHorizontal: wp(2),
  },
  bold: {
    fontWeight: "bold",
  },
  boxLabel: {
    height: 26,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingLeft: wp(2),
  },
  label: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.blue,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
  },
  tag: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  tagText: {
    fontWeight: "bold",
  },
  textSmall: {
    color: colors.grayMuda,
    fontSize: hp(1.5),
  },
  image: {
    width: wp(100),
    height: hp(5),
  },
  break: {
    width: "100%",
    height: 10,
    backgroundColor: colors.concrete,
  },
  hotel: {
    justifyContent: "center",
    paddingHorizontal: wp(2),
  },
  lebaranBanner: {
    width: "100%",
    height: 500,
  },
  iklanBanner: {
    width: "100%",
    height: 150,
    borderRadius: 6,
  },
});
