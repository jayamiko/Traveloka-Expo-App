import React from "react";
import { StyleSheet, View } from "react-native";
import { TabItem } from "../../atoms/TabItem";

const BottomNavigator = ({ state, descriptors, navigation, seller }) => {
  return (
    <View>
      <Text>Bottom Navigation</Text>
      {/* {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

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
      })} */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: (seller) => ({
    flexDirection: "row",
    justifyContent: "space-between",
  }),
});

export default BottomNavigator;
