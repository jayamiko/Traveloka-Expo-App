import React from "react";
import Svg, { Path } from "react-native-svg";

function BusSVG() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="green"
      data-id="IcProductDuotoneBusFill"
      width="24"
      height="24"
    >
      <Path
        fill="#FFF"
        fillRule="evenodd"
        d="M3 9v2a1 1 0 0 0 1 1h1V8H4a1 1 0 0 0-1 1Zm18 2V9a1 1 0 0 0-1-1h-1v4h1a1 1 0 0 0 1-1ZM8.5 20.75V20h7v.75a1.75 1.75 0 1 0 3.5 0V19H5v1.75a1.75 1.75 0 1 0 3.5 0Z"
        clipRule="evenodd"
      />
      <Path
        fillRule="evenodd"
        d="M16 2H8a4 4 0 0 0-4 4v12.75a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a4 4 0 0 0-4-4ZM8 5a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H8ZM6 9a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9Zm0 8a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm8 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export default BusSVG;
