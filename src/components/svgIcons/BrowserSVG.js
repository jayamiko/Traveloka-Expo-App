import React from "react";
import Svg, { Path, Circle, Ellipse } from "react-native-svg";

function BrowserSVG() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 192 192"
      width="28"
      height="28"
    >
      <Circle cx={96} cy={96} r={74} stroke="#E75480" strokeWidth={12} />
      <Ellipse
        cx={96}
        cy={96}
        stroke="#E75480"
        strokeWidth={12}
        rx={30}
        ry={74}
      />
      <Path
        stroke="#E75480"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
        d="M28 72h136M28 120h136"
      />
    </Svg>
  );
}

export default BrowserSVG;
