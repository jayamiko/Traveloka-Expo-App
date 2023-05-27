import React from "react";
import { View, Image, ScrollView, StyleSheet } from "react-native";
import { HeaderTravelFair } from "../../components/molecule/Header";
import { Gap } from "../../components/atoms";
import { hp, travelFairPromo } from "../../constants";
import { SwiperPromoImages } from "../../components/molecule";

function TravelFair({ navigation }) {
  return (
    <View>
      <HeaderTravelFair onPress={() => {}} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        disableScrollViewPanResponder={true}
      >
        <Image
          source={require("../../assets/promo/special-kupon.jpg")}
          style={styles.image}
        />
        {travelFairPromo.map((promo, i) => {
          return (
            <SwiperPromoImages
              index={i}
              title={promo.title}
              icon={promo.icon}
              data={promo.data}
            />
          );
        })}
        <Gap height={hp(10)} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default TravelFair;
