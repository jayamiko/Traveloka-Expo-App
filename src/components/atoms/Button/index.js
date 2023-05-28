import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { colors, hp, wp } from "../../../constants";
import Gap from "../Gap";

export function ButtonPill(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}

export function ButtonTravelFairSingapura() {
  return (
    <View style={{ paddingHorizontal: wp(2) }}>
      <Gap height={hp(1)} />
      <TouchableOpacity style={styles.singapuraTravelFair}>
        <Text style={styles.textButton}>
          Lihat Traveloka Travel Fair Singapura
        </Text>
      </TouchableOpacity>
      <Gap height={hp(1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 75,
    backgroundColor: colors.blue2,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  text: {
    color: colors.white,
    fontWeight: "600",
    fontSize: 12,
    textAlign: "center",
  },
  singapuraTravelFair: {
    textAlign: "center",
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
    backgroundColor: colors.concrete,
    borderRadius: 5,
  },
  textButton: {
    color: colors.blue2,
    fontWeight: "600",
    fontSize: 18,
    textAlign: "center",
  },
});
