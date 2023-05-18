import React from "react";
import Svg, { Path } from "react-native-svg";

function PulsaSVG() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#00ABF0"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={0}
      width="24"
      height="24"
    >
      <Path
        stroke="none"
        d="M3 14.24C3 13 3.894 12 5 12c1.101 0 2 1.007 2 2.24v4.52C7 20 6.106 21 5 21c-1.101 0-2-1.007-2-2.24v-4.52Zm7-4.495c0-1.242.893-2.245 2-2.245 1.102 0 2 1.013 2 2.245v9.01C14 19.997 13.107 21 12 21c-1.102 0-2-1.013-2-2.245v-9.01Zm7-4.487C17 4.012 17.89 3 19 3c1.106 0 2 1.012 2 2.258v13.484C21 19.988 20.11 21 19 21c-1.106 0-2-1.012-2-2.258V5.258Z"
      />
    </Svg>
  );
}

export default PulsaSVG;
