import React from "react";
import { View, StyleSheet } from "react-native";
import { Box, Divider, Flex } from "native-base";
import { colors, wp } from "../../../constants";
import IconText from "../../atoms/IconText/index";

function Divide() {
  return (
    <Box alignItems="center">
      <Flex style={styles.top} direction="row" h="42">
        <View style={styles.divide}>
          <IconText
            iconSource={require("../../../assets/icon/png/calendar-icon.png")}
            styleIcon={{ width: 28, height: 40 }}
            text="30 Apr 2023"
            color={colors.blue4}
            fontSize={14}
          />
        </View>
        <Divider bg="gray.300" thickness="1" mx="2" orientation="vertical" />
        <View style={styles.divide}>
          <IconText
            iconSource={require("../../../assets/icon/png/moon-icon.png")}
            styleIcon={{ width: 28, height: 40 }}
            text="1 Malam"
            color={colors.blue4}
            fontSize={14}
          />
        </View>
        <Divider bg="gray.300" thickness="1" mx="2" orientation="vertical" />
        <View style={styles.divide}>
          <IconText
            iconSource={require("../../../assets/icon/png/guest-blue-icon.png")}
            styleIcon={{ width: 28, height: 40 }}
            text="1"
            color={colors.blue4}
            fontSize={14}
          />
          <IconText
            iconSource={require("../../../assets/icon/png/door-icon.png")}
            styleIcon={{ width: 28, height: 40 }}
            text="1"
            color={colors.blue4}
            fontSize={14}
          />
        </View>
      </Flex>
      <Divider bg="gray.300" thickness="1" mx="2" orientation="horizontal" />
    </Box>
  );
}

const styles = StyleSheet.create({
  top: {
    width: "100%",
    paddingHorizontal: wp(2),
    backgroundColor: colors.white,
  },
  divide: {
    width: "30%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 8,
  },
});

export default Divide;
