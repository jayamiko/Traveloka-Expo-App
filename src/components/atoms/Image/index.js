import React from "react";
import { Image } from "react-native";

function ImageIcon(props) {
  return (
    <Image
      source={props.url}
      style={{
        width: props.width ?? 48,
        height: props.height ?? 48,
      }}
    />
  );
}

export default ImageIcon;
