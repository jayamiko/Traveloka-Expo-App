import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { colors } from "../../constants";
import Carousel from "../../components/molecule/Carousel";

export const Introduction = ({ navigation }) => {
  return (
    <View style={styles.page_padding}>
      <Carousel />
      <View style={styles.bottom}>
        <Text style={styles.text}>Akses Penuh Ke Fitur Yang Lebih Lengkap</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("MainApp")}
        >
          <Text style={styles.textButton}>Gabung ke Traveloka</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page_padding: {
    flex: 1,
    backgroundColor: colors.blue2,
    justifyContent: "flex-start",
  },
  text: {
    color: colors.black,
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  bottom: {
    height: "25%",
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  button: {
    backgroundColor: colors.orange,
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  textButton: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
