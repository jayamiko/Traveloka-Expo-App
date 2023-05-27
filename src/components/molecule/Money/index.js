import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { colors, hp, wp } from "../../../constants";
import { ButtonIconText, Gap, ButtonPill } from "../../atoms";
import PointSVG from "../../svgIcons/PointSVG";
import WalletSVG from "../../svgIcons/WalletSVG";
import PayLaterSVG from "../../svgIcons/PayLaterSVG";

export const Money = () => {
  return (
    <View style={styles.container_point}>
      <View>
        <ButtonIconText
          icon={<PointSVG />}
          title={"Points"}
          titleColor={colors.grayMuda}
          fontWeight={"bold"}
          fontSize={12}
        />
        <Text style={styles.point}>500</Text>
      </View>
      <Gap width={wp(2.5)} />
      <TouchableOpacity style={styles.colCenter}>
        <ButtonIconText
          icon={<WalletSVG />}
          title={"UANGKU"}
          titleColor={colors.grayMuda}
          fontWeight={"bold"}
          fontSize={12}
        />
        <ButtonPill text="Aktifkan" />
      </TouchableOpacity>
      <Gap width={wp(2.5)} />
      <View style={styles.colCenter}>
        <ButtonIconText
          icon={<PayLaterSVG color={colors.blue2} />}
          title={"PayLater"}
          titleColor={colors.grayMuda}
          fontWeight={"bold"}
          fontSize={12}
        />
        <ButtonPill text="Daftar" />
      </View>
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
  colCenter: {
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    color: colors.grayMuda,
    fontWeight: "bold",
    fontSize: 12,
  },
  point: {
    fontSize: 12,
    textAlign: "center",
  },
});
