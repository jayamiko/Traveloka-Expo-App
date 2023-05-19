import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { colors, hp, wp } from "../../../constants";
import { ButtonIconText, Gap } from "../../atoms";
import PointSVG from "../../svgIcons/PointSVG";
import WalletSVG from "../../svgIcons/WalletSVG";
import PayLaterSVG from "../../svgIcons/PayLaterSVG";

export const Money = () => {
  return (
    <View style={styles.container_point}>
      <ButtonIconText
        icon={<PointSVG />}
        title={"Points"}
        titleColor={colors.grayMuda}
        fontWeight={"bold"}
        fontSize={12}
      />
      <Gap width={wp(2.5)} />
      <ButtonIconText
        icon={<WalletSVG />}
        title={"UANGKU"}
        titleColor={colors.grayMuda}
        fontWeight={"bold"}
        fontSize={12}
      />
      <Gap width={wp(2.5)} />
      <ButtonIconText
        icon={<PayLaterSVG />}
        title={"PayLater"}
        titleColor={colors.grayMuda}
        fontWeight={"bold"}
        fontSize={12}
      />
      <Gap width={wp(2.5)} />
      <TouchableOpacity>
        <Image
          source={require("../../../assets/icon/png/qrcode.png")}
          style={{ width: wp(8), height: wp(8) }}
        />
        <Text style={styles.text}>Bayar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container_point: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingBottom: hp(1),
  },
  text: {
    color: colors.grayMuda,
    fontWeight: "bold",
    fontSize: 12,
  },
});
