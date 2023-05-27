import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { colors, hp, wp } from "../../../constants";
import { Input, Gap, ArrowBackScreen } from "../../atoms";
import SearchSVG from "../../svgIcons/SearchSVG";

export const Header = ({ onPress }) => {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const placeholders = [
    "Tiket Pesawat Bali",
    "Sera Homestay",
    "Tidung Solata Homestay",
    "Lumire Hotel Convention..",
    "Coba Pengalaman Baru & sek..",
    `Cari "produck keuangan di Tra..`,
    "Hotel Jakarta Pusat",
  ];

  const changePlaceholder = () => {
    const nextPlaceholderIndex = (currentPlaceholder + 1) % placeholders.length;
    setCurrentPlaceholder(nextPlaceholderIndex);
  };

  useEffect(() => {
    const interval = setInterval(changePlaceholder, 5000);
    return () => clearInterval(interval);
  }, [currentPlaceholder]);

  return (
    <View style={styles.header}>
      <Input
        colorText={colors.grayMuda}
        paddingHorizontal={wp(3)}
        backgroundColor={colors.white}
        placeholder={placeholders[currentPlaceholder]}
        fontSize={14}
        borderRadius={wp(1)}
        height={hp(5)}
        suffixComponent={<SearchSVG />}
        widthInput={wp(58)}
        onPress={onPress}
      />
      <Gap width={wp(2.5)} />
      <Image
        source={require("../../../assets/icon/png/bell.png")}
        style={{ width: 30, height: hp(4.6) }}
      />
      <Gap width={wp(2.5)} />
      <Image
        source={require("../../../assets/icon/png/chat.png")}
        style={{ width: 30, height: hp(4.6) }}
      />
    </View>
  );
};

export const HeaderTravelFair = ({ onPress }) => {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const placeholders = ["Cari potongan harga disini!"];

  const changePlaceholder = () => {
    const nextPlaceholderIndex = (currentPlaceholder + 1) % placeholders.length;
    setCurrentPlaceholder(nextPlaceholderIndex);
  };

  useEffect(() => {
    const interval = setInterval(changePlaceholder, 5000);
    return () => clearInterval(interval);
  }, [currentPlaceholder]);

  return (
    <View style={styles.header}>
      <ArrowBackScreen width={30} height={30} />
      <Gap width={wp(2.5)} />
      <Input
        colorText={colors.grayMuda}
        paddingHorizontal={wp(3)}
        backgroundColor={colors.white}
        placeholder={placeholders[currentPlaceholder]}
        fontSize={14}
        borderRadius={wp(1)}
        height={hp(5)}
        suffixComponent={<SearchSVG />}
        widthInput={wp(35)}
        onPress={onPress}
      />
      <Gap width={wp(2.5)} />
      <TouchableOpacity style={styles.buttonKupon}>
        <Text style={{ color: colors.white, fontWeight: "bold", fontSize: 16 }}>
          Kupon Gratis
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.blue2,
    height: hp(8),
    paddingHorizontal: wp(2),
    paddingVertical: wp(3),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonKupon: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 6,
    paddingHorizontal: wp(3),
  },
});
