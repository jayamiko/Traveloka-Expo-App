import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  ScrollView,
} from "react-native";
import { colors, hp, wp } from "../../../constants";
import { ButtonIconText, Gap } from "../../atoms";
import { menuLists, menus } from "../../../constants/menus";

export const Menu = () => {
  const height = 0;
  return (
    <>
      <View style={styles.container_main_menu}>
        {menus.map((item) => {
          return (
            <ButtonIconText
              icon={<View style={styles.icon(item.color)}>{item.icon}</View>}
              title={item.title}
              titleColor={colors.grayMuda}
              fontSize={hp(1.7)}
              width={wp(17)}
              flexDirection={"column"}
              textAlign={"center"}
              widthText={wp(20)}
              justifyContent={"flex-start"}
              fontWeight={"600"}
            />
          );
        })}
        <TouchableOpacity
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingVertical: height ? null : 0 ? 0 : hp(0.5),
            paddingHorizontal: wp(2),
            borderRadius: 8,
          }}
        >
          <View style={styles.icon(colors.blue4)}>
            <Image
              source={require("../../../assets/icon/png/paylater.png")}
              style={{ width: wp(11), height: hp(7) }}
            />
          </View>
          <Gap width={wp(1)} />
          <Text
            style={{
              color: colors.grayMuda,
              fontSize: hp(1.7),
              width: wp(20),
              fontWeight: "600",
              textAlign: "center",
              marginTop: 2,
            }}
          >
            Pay Later
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line}></View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Gap width={wp(1.5)} />
        <View style={styles.menus}>
          <View style={styles.container_menu}>
            {menuLists.map((item) => {
              return (
                <ButtonIconText
                  icon={
                    <View style={styles.smallICon(colors.concrete)}>
                      {item.icon}
                    </View>
                  }
                  title={item.title}
                  titleColor={colors.grayMuda}
                  fontSize={hp(1.7)}
                  width={wp(17)}
                  flexDirection={"column"}
                  textAlign={"center"}
                  widthText={wp(20)}
                  justifyContent={"flex-start"}
                  fontWeight={"600"}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container_main_menu: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menus: {
    flexDirection: "column",
  },
  container_menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: wp(2),
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: colors.concrete,
    marginVertical: hp(2),
  },
  icon: (backgroundColor) => ({
    backgroundColor: backgroundColor,
    borderRadius: wp(16) / 2,
    alignItems: "center",
    justifyContent: "center",
    width: wp(16),
    height: wp(16),
    flexDirection: "row",
  }),
  smallICon: (backgroundColor) => ({
    backgroundColor: backgroundColor,
    borderRadius: wp(14) / 2,
    alignItems: "center",
    justifyContent: "center",
    width: wp(14),
    height: wp(14),
    flexDirection: "row",
  }),
});
