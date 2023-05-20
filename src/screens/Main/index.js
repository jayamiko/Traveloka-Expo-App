import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, hp, visit, wp } from "../../constants";
import { ButtonIconOnly, Gap } from "../../components/atoms";
import { Card, Money, Menu, Header, Iklan } from "../../components/molecule";
import ArrowRightSVG from "../../components/svgIcons/ArrowRightSVG";

export const Main = ({ navigation }) => {
  const [categoryActive, setCategoryActive] = useState("Xperience");

  const dataHotels = visit.filter((item) => item.category == "Hotel");
  const dataXperience = visit.filter((item) => item.category == "Xperience");

  const [dataFilter, setDataFilter] = useState(dataHotels);

  function handleFilter(value) {
    if (value == "Hotel") {
      setDataFilter(dataHotels);
      setCategoryActive("Hotel");
    } else {
      setCategoryActive("Xperience");
      setDataFilter(dataXperience);
    }
  }

  useEffect(() => {
    handleFilter(categoryActive);
  }, [categoryActive]);

  return (
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
          <View style={styles.containerRow}>
            <View style={styles.box}>
              <Text style={styles.textBold}>Hai, Jaya Miko!</Text>
              <View style={styles.row}>
                <Money />
              </View>
            </View>
          </View>
          <Menu />
          <Gap height={hp(3)} />
          <View style={styles.break} />
          <Gap height={hp(3)} />
          {/* HOTELS VISIT */}
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
                        categoryActive == "Hotel" ? colors.white : colors.blue2,
                    },
                  ]}
                >
                  Hotel
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
          <Gap height={hp(3)} />
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
          <Gap height={hp(3)} />
          <Image
            source={require("../../assets/ilustrasi/promo-lebaran.jpg")}
            style={styles.lebaranBanner}
          />
          <Gap height={hp(3)} />
          {/* IKLAN BUAVITA */}
          <Iklan
            title="Saatnya Mudik, Saatnya Buavita"
            sponsor={true}
            sponsorName="Buavita"
            image={require("../../assets/ilustrasi/iklan-buavita.jpg")}
          />
          <Gap height={hp(3)} />
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
          <Gap height={hp(3)} />
          {/* IKLAN TOUR */}
          <Iklan
            title="Seru-Seruan di Singapura & Mal..."
            sponsor={false}
            image={require("../../assets/ilustrasi/iklan-tour.jpg")}
          />
          <Gap height={hp(3)} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  container: {
    paddingHorizontal: wp(3),
  },
  pageView: {
    position: "relative",
    bottom: 40,
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
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp(2),
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
  textBold: {
    color: colors.gray,
    fontSize: hp(2),
    paddingHorizontal: wp(2),
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
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
