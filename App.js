import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Routes } from "./src/routing";
import "./ignoreWarnings";
import { AppRegistry } from "react-native";

// Content View.reactnative
// Traveloka App
// Version:
//    iOS: 3.77.1
//    Android: 3.77.1
// Created by Jaya Miko Yoga Pratama

// MARK: Instagram
// MARK: _@mjaya10

// Connect With Me:
// LinkedIn: Jaya Miko Yoga Pratama
// Github: jayamiko

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

AppRegistry.registerComponent("MyApp", () => App);
