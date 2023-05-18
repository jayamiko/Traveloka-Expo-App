import React from "react";
import Svg, { Path } from "react-native-svg";

function OrderSVG() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      data-id="IcUserBooking"
      width="24"
      height="24"
    >
      <Path
        stroke="#687176"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 7v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7M4 7V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2M4 7h4.5M20 7h-8"
      />
      <Path
        stroke="#687176"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 17h-3.5a.5.5 0 0 1 0-1H16a.5.5 0 0 1 0 1ZM16 12h-3.5a.5.5 0 0 1 0-1H16a.5.5 0 0 1 0 1ZM7.5 12v-1h1v1h-1ZM7.5 17v-1h1v1h-1Z"
      />
    </Svg>
  );
}

export default OrderSVG;
