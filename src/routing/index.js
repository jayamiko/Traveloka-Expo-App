import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import {
  Main,
  Splash,
  StaycationDetail,
  Introduction,
  TravelFair,
  SplashProfile,
} from "../screens";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider } from "native-base";
import { colors, hp } from "../constants";
import TabItem from "../components/atoms/TabItem";
import { HeaderTitle } from "../components/molecule";

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
            <Stack.Screen
              name="SplashProfile"
              component={SplashProfile}
              options={{ headerShown: false }}
            />
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
