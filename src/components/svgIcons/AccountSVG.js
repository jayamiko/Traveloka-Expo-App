import React from "react";
import Svg, { Path } from "react-native-svg";

function AccountSVG() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      data-id="IcUserAccount"
      width="24"
      height="24"
    >
      <Path
        stroke="#687176"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7.5a4 4 0 1 0 8 0v-1a4 4 0 0 0-8 0v1ZM19.5 21h-15s.5-7 7.5-7 7.5 7 7.5 7Z"
      />
    </Svg>
  );
}

export default AccountSVG;
