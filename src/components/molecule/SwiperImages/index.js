import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { hp, wp } from "../../../constants";
import { ButtonIconOnly, Gap } from "../../atoms";
import ArrowRightSVG from "../../svgIcons/ArrowRightSVG";

function SwiperImages(props) {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {props.data.map((item, index) => {
          return (
            <TouchableOpacity key={index} style={styles.disconCard}>
              <Image source={item} style={styles.disconPoster} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

export function SwiperPromoImages(props) {
  return (
    <View key={props.title}>
      <Gap height={hp(4)} />
      <View style={styles.container}>
        <View style={styles.rowBetween}>
          <View style={styles.row}>
            <ButtonIconOnly icon={props.icon} />
            <Text style={styles.title}>{props.title}</Text>
          </View>
          <ButtonIconOnly icon={<ArrowRightSVG />} />
        </View>
      </View>
      <View style={styles.boxBanner}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {props?.data?.map((ticket, index) => {
            return (
              <View key={index}>
                <Image source={ticket} style={styles.promoBanner} />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  disconPoster: {
    height: 140,
    width: 140,
    borderRadius: 6,
  },
  disconCard: {
    marginRight: 10,
  },
  container: {
    justifyContent: "center",
    paddingHorizontal: wp(2),
  },
  title: {
    fontWeight: "600",
    fontSize: 22,
    marginLeft: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  boxBanner: {
    width: "100%",
    height: 160,
    borderRadius: 6,
    marginTop: 6,
  },
  promoBanner: {
    width: 320,
    height: 160,
    borderRadius: 6,
    marginLeft: wp(4),
  },
});

export default SwiperImages;
