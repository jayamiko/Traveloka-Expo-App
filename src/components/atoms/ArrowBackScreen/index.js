import React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ArroBackScreen({ width, height }) {
  const navigation = useNavigation();

  const goBackPage = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity onPress={goBackPage} style={styles.button}>
      <Image
        source={require("../../../assets/icon/png/arrow-back.png")}
        style={{
          width: width,
          height: height,
        }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ArroBackScreen;
