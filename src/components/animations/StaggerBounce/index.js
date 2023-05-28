import React, { useEffect } from "react";
import { View, Text, Animated, Easing, StyleSheet, Image } from "react-native";
import { colors } from "../../../constants";

const StaggerBounce = ({ animatedValue, text }) => {
  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -10],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animation,
          {
            transform: [{ translateY }],
          },
        ]}
      >
        <Image
          source={require("../../../assets/icon/png/arrow-back.png")}
          style={styles.arrow}
        />
        <Text style={styles.text}>{text ?? "Selengkapnya"}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  animation: {
    position: "absolute",
    bottom: 0,
    width: 200,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: colors.blue3,
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
    marginLeft: 5,
  },
  arrow: {
    width: 20,
    height: 20,
    transform: [{ rotate: `270deg` }],
  },
});

export default StaggerBounce;
