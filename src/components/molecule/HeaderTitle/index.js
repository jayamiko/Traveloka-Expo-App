import React from "react";
import ArroBackScreen from "../../atoms/ArrowBackScreen";
import { Image, View, Text, StyleSheet } from "react-native";
import { Gap } from "../../atoms";
import { colors, wp } from "../../../constants";

function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.name;

  switch (routeName) {
    case "Home":
      return "Home";
    case "StaycationDetail":
      const { name } = route.params?.item;
      const { location } = route.params?.item;
      return { name, location };
    default:
      return "Home";
  }
}

function HeaderTitle({ route }) {
  const data = getHeaderTitle(route);

  return (
    <View style={styles.header}>
      <ArroBackScreen width={30} height={30} />
      <View style={{ width: "65%", marginLeft: 8 }}>
        <Text style={{ fontSize: 14, fontWeight: "bold", color: colors.white }}>
          {data.name}
          <Text
            style={{ fontSize: 12, fontWeight: "normal", color: colors.white }}
          >
            {"\n"}
            Tebet, Jakarta
          </Text>
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Image
          source={require("../../../assets/icon/png/bookmark.png")}
          style={{
            width: 35,
            height: 35,
          }}
        />
        <Gap width={wp(6)} />
        <Image
          source={require("../../../assets/icon/png/treepoint.png")}
          style={{
            width: 20,
            height: 35,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    marginTop: -45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default HeaderTitle;
