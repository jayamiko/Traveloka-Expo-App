import React from "react";
import Svg, { G, Path } from "react-native-svg";

function CulinarySVG() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={0}
      viewBox="0 0 16 16"
      width="24"
      height="16"
    >
      <G fill="none">
        <Path stroke="none" d="M0 0h16v16H0z" />
        <Path
          fill="#8B4513"
          stroke="none"
          d="M3.908 7.825C2.968 7.297 2 5.654 2 4c0-2.008.87-4 2.5-4S7 1.992 7 4c0 1.654-.967 3.297-1.908 3.825l.742 6.684a1.343 1.343 0 1 1-2.668 0l.742-6.684zM11 7h1l.834 7.51A1.343 1.343 0 0 1 11.5 16a1.343 1.343 0 0 1-1.334-1.49L11 7z"
        />
        <Path
          stroke="#8B4513"
          strokeWidth={1.5}
          d="M9 1v4.667C9 6.403 9.597 7 10.333 7h2.334C13.403 7 14 6.403 14 5.667V1m-2.5 0v6"
        />
      </G>
    </Svg>
  );
}

export default CulinarySVG;
