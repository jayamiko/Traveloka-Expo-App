import React from "react";
import Svg, { Path } from "react-native-svg";

function PointSymbolSVG() {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24">
      <Path
        fill="#fff"
        stroke="#fff"
        strokeWidth={1.5}
        d="M12 5.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm0 6a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm0 6a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z"
      />
    </Svg>
  );
}

export default PointSymbolSVG;
