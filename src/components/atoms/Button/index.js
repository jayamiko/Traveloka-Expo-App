import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../../constants";

function ButtonPill(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
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
});

export default ButtonPill;
