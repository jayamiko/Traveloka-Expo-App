import React, { useRef, useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import { colors, discons, hp, visit, wp } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";
import { ButtonIconOnly, Gap } from "../../components/atoms";
import { Card, Money, Menu, Header, Iklan } from "../../components/molecule";
import ArrowRightSVG from "../../components/svgIcons/ArrowRightSVG";
import StaggerBounce from "../../components/animations/StaggerBounce";
import { BgPromo, DiscHotelInter, TravelFairBanner } from "../../assets";
import SwiperImages from "../../components/molecule/SwiperImages";

export const Main = ({ navigation }) => {
  const [categoryActive, setCategoryActive] = useState("Hotel");
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [isScrolling, setIsScrolling] = useState(false);

  const dataHotels = visit.filter((item) => item.category == "Hotel");
  const dataXperience = visit.filter((item) => item.category == "Xperience");

  const [dataFilter, setDataFilter] = useState(dataHotels);

  function handleFilter(value) {
    if (value == "Xperience") {
      setCategoryActive("Xperience");
      setDataFilter(dataXperience);
    } else {
      setDataFilter(dataHotels);
      setCategoryActive("Hotel");
    }
  }

  useEffect(() => {
    handleFilter(categoryActive);
  }, [categoryActive]);

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
              <View style={styles.row}>
                <TouchableOpacity
                  style={[
                    styles.tag,
                    {
                      backgroundColor:
                        categoryActive == "Hotel"
                          ? colors.blue2
                          : colors.concrete,
                    },
                  ]}
                  onPress={() => setCategoryActive("Hotel")}
                >
                  <Text
                    style={[
                      styles.tagText,
                      {
                        color:
                          categoryActive == "Hotel"
                            ? colors.white
                            : colors.blue2,
                      },
                    ]}
                  >
                    Hotel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.tag,
                    {
                      backgroundColor:
                        categoryActive == "Xperience"
                          ? colors.blue2
                          : colors.concrete,
                    },
                  ]}
                  onPress={() => setCategoryActive("Xperience")}
                >
                  <Text
                    style={[
                      styles.tagText,
                      {
                        color:
                          categoryActive == "Xperience"
                            ? colors.white
                            : colors.blue2,
                      },
                    ]}
                  >
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
                {dataFilter.map((item, index) => {
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
                {visit.map((item, index) => {
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
            <View style={styles.backgroundPromoSize}>
              <Image source={BgPromo} style={styles.backgroundPromoSize} />
              <View
                style={[
                  styles.paddingHz,
                  {
                    position: "absolute",
                    width: "100%",
                    marginTop: 100,
                  },
                ]}
              >
                <Image
                  source={TravelFairBanner}
                  style={styles.travelFairBanner}
                />
                <Gap height={hp(2)} />
                <SwiperImages data={discons} />
                <Gap height={hp(4)} />
                <SwiperImages data={discons} />
                <View
                  style={{
                    width: "100%",
                    marginVertical: 10,
                  }}
                >
                  <TouchableOpacity style={styles.buttonGreen}>
                    <Text style={{ fontWeight: "600", fontSize: 16 }}>
                      Lihat Semua Promo
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Gap height={hp(1)} />
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
                {visit.map((item, index) => {
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
            {/* IKLAN BUAVITA */}
            <Iklan
              title="Saatnya Mudik, Saatnya Buavita"
              sponsor={true}
              sponsorName="Buavita"
              image={require("../../assets/ilustrasi/iklan-buavita.jpg")}
            />
            <Gap height={hp(2)} />
            {/* PLANE VISIT */}
            <View style={styles.hotel}>
              <View style={styles.rowBetween}>
                <Text style={styles.title}>Pilihan penerbangan untuk Anda</Text>
                <ButtonIconOnly icon={<ArrowRightSVG />} />
              </View>
            </View>
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Gap width={wp(1.5)} />
                {visit.map((item, index) => {
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
            {/* IKLAN TOUR */}
            <Iklan
              title="Seru-Seruan di Singapura & Mal..."
              sponsor={false}
              image={require("../../assets/ilustrasi/iklan-tour.jpg")}
            />
            <Gap height={hp(1)} />
          </View>
        </ScrollView>
      </View>
      {!isScrolling && <StaggerBounce animatedValue={animatedValue} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    alignItems: "center",
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
