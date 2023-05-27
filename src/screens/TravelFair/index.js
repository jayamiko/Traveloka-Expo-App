import React, { useRef } from "react";
import { View, Image, ScrollView, Animated, StyleSheet } from "react-native";
import { HeaderTravelFair } from "../../components/molecule/Header";
import { Gap } from "../../components/atoms";
import { hp, travelFairPromo } from "../../constants";
import { SwiperPromoImages } from "../../components/molecule";
import StaggerBounce from "../../components/animations/StaggerBounce";

function TravelFair({ navigation }) {
  const animatedValue = useRef(new Animated.Value(0)).current;
  return (
    <ScrollView contentContainerStyle={styles.container}>
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
              key={i}
              title={promo.title}
              icon={promo.icon}
              data={promo.data}
            />
          );
        })}
        <Gap height={hp(10)} />
      </ScrollView>
      <StaggerBounce animatedValue={animatedValue} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
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
