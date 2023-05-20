import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";
import { colors, hp } from "../../../constants";

export function IconText({
  iconSource,
  text,
  color,
  fontSize,
  fontWeight,
  styleIcon,
}) {
  return (
    <View style={styles.boxRow}>
      <Image source={iconSource} style={styleIcon ? styleIcon : styles.icon} />
      <Text
        style={{
          color: color,
          fontSize: fontSize,
          fontWeight: fontWeight ?? "400",
        }}
      >
        {text}
      </Text>
    </View>
  );
}

export function IconFacility({ item }) {
  return (
    <View style={styles.boxFacilities}>
      <Image
        source={item.icon}
        style={{
          width: 40,
          height: hp(8),
        }}
      />
      <Text style={styles.iconText}>{item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  boxRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 14,
    height: hp(3),
    marginRight: 8,
  },
  boxFacilities: {
    maxWidth: 80,
    alignItems: "center",
    marginRight: 18,
  },
  iconText: {
    fontSize: 12,
    color: colors.grayMuda,
    textAlign: "center",
  },
});

export default IconText;
