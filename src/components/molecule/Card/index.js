import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, hp, wp } from "../../../constants";
import { Gap } from "../../atoms";
import ImageIcon from "../../atoms/Image";
import MapSVG from "../../svgIcons/MapSVG";

const Card = ({ item, labelPromo = false, labelText, widthlabel, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.picture}>
        <Image source={item.image[0]} style={styles.image} />
        <View style={styles.boxLabel}>
          <View style={styles.rowBetween}>
            <View>
              <View style={styles.label}></View>
              <Text style={styles.labelText}>{item.city}</Text>
            </View>
            <View>
              <ImageIcon
                url={require("../../../assets/icon/png/bookmark.png")}
                width={32}
                height={32}
              />
            </View>
          </View>
          {labelPromo && (
            <View style={styles.rowEnd}>
              <View style={{ marginVertical: 4 }}>
                <View style={[styles.labelPromo, { width: widthlabel }]}></View>
                <Text style={styles.labelPromoText}>
                  {String.fromCharCode(0x26a1)}
                  {labelText}
                </Text>
              </View>
            </View>
          )}
        </View>
      </View>
      <View style={styles.contentText}>
        <Gap height={hp(1)} />
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.info}>
          <ImageIcon
            url={require("../../../assets/icon/png/traveloka-icon.png")}
            width={18}
            height={18}
          />
          <Text style={styles.rate}>{item.rate}/10</Text>
          <Text style={styles.review}>({item.review})</Text>
        </View>
        <Text style={styles.promo}>{item.normalPrice}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: colors.white,
    marginHorizontal: 8,
    marginVertical: hp(1.5),
    width: wp(45),
    height: hp(30),
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowEnd: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  picture: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: "50%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  boxLabel: {
    position: "absolute",
    width: "100%",
    display: "flex",
    flexDirection: "col",
    justifyContent: "space-between",
    height: "100%",
  },
  label: {
    width: 85,
    height: 25,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: colors.black,
    opacity: 0.5,
  },
  labelPromo: {
    height: 25,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: colors.orange,
  },
  labelText: {
    position: "absolute",
    color: colors.white,
    fontSize: 11,
    fontWeight: "600",
    paddingHorizontal: 10,
    paddingVertical: 4,
    height: 20,
  },
  labelPromoText: {
    position: "absolute",
    color: colors.white,
    fontSize: 12,
    fontWeight: "700",
    paddingHorizontal: 10,
    paddingVertical: 4,
    height: 25,
  },
  contentText: {
    flex: 1,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: hp(2),
    fontWeight: "500",
  },
  info: {
    flexDirection: "row",
  },
  rate: {
    fontSize: hp(1.6),
    color: colors.blue2,
    textTransform: "capitalize",
    fontWeight: "600",
    marginLeft: 4,
  },
  review: {
    fontSize: hp(1.6),
    color: colors.gray,
    textTransform: "capitalize",
    marginLeft: 4,
    fontWeight: "600",
  },
  promo: {
    fontSize: hp(1.6),
    color: colors.grayMuda,
    textTransform: "capitalize",
    textDecorationLine: "line-through",
  },
  price: {
    fontSize: hp(2),
    textTransform: "capitalize",
    fontWeight: "500",
    color: colors.orange,
  },
});
