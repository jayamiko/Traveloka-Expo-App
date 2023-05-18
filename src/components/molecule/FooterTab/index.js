import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { HStack } from "native-base";
import { colors, wp } from "../../../constants";

function FooterTab({ drawer, item, navigation }) {
  return (
    <HStack bg="white" style={styles.footer} safeAreaBottom shadow={10}>
      <View style={styles.containerFooter}>
        <View>
          <Text style={styles.textGray}>Harga/kamar/malam mulai dari</Text>
          <Text style={styles.textPrice}>{item.price}</Text>
          <Text style={styles.textGrayBold}>Termasuk Pajak</Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonRoom}
            // onPress={() => drawer.current.openDrawer()}
            onPress={() =>
              navigation.navigate("Splash", {
                item: item,
              })
            }
          >
            <Text style={styles.textButton}>Pilih Kamar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </HStack>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    height: 75,
    padding: wp(2),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  containerFooter: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textGray: {
    color: colors.grayMuda,
    fontSize: 14,
  },
  textPrice: {
    color: colors.orange,
    fontSize: 18,
    fontWeight: "bold",
  },
  textGrayBold: {
    color: colors.grayMuda,
    fontSize: 12,
    fontWeight: "bold",
  },
  button: {
    width: 100,
    justifyContent: "center",
  },
  buttonRoom: {
    width: "100%",
    backgroundColor: colors.orange,
    padding: 8,
    borderRadius: 4,
  },
  textButton: {
    textAlign: "center",
    color: colors.white,
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default FooterTab;
