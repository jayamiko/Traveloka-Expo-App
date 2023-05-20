import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Routes } from "./src/routing";
import "./ignoreWarnings";
import { AppRegistry } from "react-native";

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
