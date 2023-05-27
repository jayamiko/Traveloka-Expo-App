import React from "react";
import {
  SafeAreaView,
  // StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import {
  Main,
  Splash,
  StaycationDetail,
  Introduction,
  TravelFair,
} from "../screens";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider } from "native-base";
import { colors, hp, wp } from "../constants";
import TabItem from "../components/atoms/TabItem";
import { Gap } from "../components/atoms";

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
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={({ route }) => ({
              headerTitle: (props) => <HeaderTitle route={route} />,
              headerStyle: {
                backgroundColor: colors.blue2,
                height: 60,
              },
            })}
          >
            <Stack.Screen
              name="MainApp"
              component={MainApp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            {/* <Stack.Screen
              name="SplashProfile"
              component={ProfileScreen}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="Introduction"
              component={Introduction}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StaycationDetail"
              component={StaycationDetail}
              options={{
                headerShown: true,
                headerLeft: null,
              }}
            />
            <Stack.Screen
              name="TravelFair"
              component={TravelFair}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

function HeaderTitle({ route }) {
  const data = getHeaderTitle(route);

  const navigation = useNavigation();

  const goBackPage = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={goBackPage}>
        <Image
          source={require("../assets/icon/png/arrow-back.png")}
          style={{
            width: 35,
            height: 35,
          }}
        />
      </TouchableOpacity>
      <View style={{ width: "65%", marginLeft: 8 }}>
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
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Image
          source={require("../assets/icon/png/bookmark.png")}
          style={{
            width: 35,
            height: 35,
          }}
        />
        <Gap width={wp(6)} />
        <Image
          source={require("../assets/icon/png/treepoint.png")}
          style={{
            width: 20,
            height: 35,
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
    case "StaycationDetail":
      const { name } = route.params?.item;
      const { location } = route.params?.item;
      return { name, location };
    default:
      return "Home";
  }
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    width: 395,
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
  header: {
    width: "100%",
    height: 60,
    marginTop: -45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
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
