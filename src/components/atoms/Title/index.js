import React from "react";
import { Text, StyleSheet } from "react-native";

export function Title({ text }) {
  return <Text style={styles.name}>{text}</Text>;
}

export function SubTitle({ text }) {
  return <Text style={styles.fontMedium}>{text}</Text>;
}

const styles = StyleSheet.create({
  name: {
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "capitalize",
  },
  fontMedium: {
    fontSize: 18,
    fontWeight: "600",
  },
});

export default Title;
