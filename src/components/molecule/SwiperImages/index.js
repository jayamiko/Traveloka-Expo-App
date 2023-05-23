import React from "react";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

function SwiperImages(props) {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {props.data.map((item, index) => {
          return (
            <TouchableOpacity key={index} style={styles.disconCard}>
              <Image source={item} style={styles.disconPoster} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  disconPoster: {
    height: 140,
    width: 140,
    borderRadius: 6,
  },
  disconCard: {
    marginRight: 10,
  },
});

export default SwiperImages;
