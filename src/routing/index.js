import React from "react";
import {
  SafeAreaView,
  // StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  // Image,
} from "react-native";
import { Main } from "../screens";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { BottomNavigation } from "../components/molecule/BottomNavigation";
import { NativeBaseProvider } from "native-base";
import { colors, hp } from "../constants";
import TabItem from "../components/atoms/TabItem";

const BottomTab = createBottomTabNavigator();

const Stack = createStackNavigator();

const BottomNavigation = ({ state, descriptors, navigation, seller }) => {
  return (
    <View style={styles.container(seller)}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index == index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabItem
            key={index}
            title={label}
            active={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        );
      })}
    </View>
  );
};

const MainApp = () => {
  return (
    <BottomTab.Navigator tabBar={(props) => <BottomNavigation {...props} />}>
      <BottomTab.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      <BottomTab.Screen
        name="Simpan"
        component={Main}
        options={{ headerShown: false }}
      />
      <BottomTab.Screen
        name="Pesanan"
        component={Main}
        options={{ headerShown: false }}
      />
      <BottomTab.Screen
        name="Inbox"
        component={Main}
        options={{ headerShown: false }}
      />
      <BottomTab.Screen
        name="Akun"
        component={Main}
        options={{ headerShown: false }}
      />
    </BottomTab.Navigator>
  );
};

export const Routes = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.SafeAreaView}>
          {/* <StatusBar backgroundColor={colors.blue2 } /> */}
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={({ route }) => ({
              headerTitle: (props) => <HeaderTitle route={route} />,
              headerStyle: {
                backgroundColor: colors.blue2,
              },
              headerTintColor: colors.white,
            })}
          >
            <Stack.Screen
              name="MainApp"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash"
              component={MainApp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashProfile"
              component={ProfileScreen}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
                name="Introduction"
                component={Introduction}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="HotelDetail"
                component={HotelDetailScreen}
                options={{
                  headerShown: true,
                }}
              /> */}
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

function HeaderTitle({ route }) {
  const data = getHeaderTitle(route);

  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <View style={{ width: "55%" }}>
        <Text style={{ fontSize: 14, fontWeight: "bold", color: colors.white }}>
          {data.name}
          <Text
            style={{ fontSize: 12, fontWeight: "normal", color: colors.white }}
          >
            {"\n"}
            {data.location}
          </Text>
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../assets/icon/png/traveloka-icon.png")}
          style={{
            width: 40,
            height: 40,
          }}
        />
        <Image
          source={require("../assets/icon/png/traveloka-icon.png")}
          style={{
            width: 40,
            height: 40,
          }}
        />
      </View>
    </View>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.name;

  switch (routeName) {
    case "Home":
      return "Home";
    case "HotelDetail":
      const { name } = route.params?.item;
      const { location } = route.params?.item;
      return { name, location };
    default:
      return "Home";
  }
}

function HomeScreen() {
  return (
    <View style={styles.background}>
      <Text style={{ marginTop: 20, color: "#000" }}>Home Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.background}>
      <Text style={{ marginTop: 20, color: "#000" }}>Profile Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    width: 375,
  },
  background: {
    backgroundColor: "#fff",
  },
  container: (seller) => ({
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  }),
  containerTabItem: {
    alignItems: "center",
    backgroundColor: colors.white,
    flex: 1,
    paddingVertical: hp(1),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  text: (active) => ({
    fontSize: hp(1.5),
    color: active ? colors.blue3 : colors.grayMuda,
  }),
});
