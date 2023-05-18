import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Routes } from "./src/routing";
import { colors } from "./src/constants";

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
