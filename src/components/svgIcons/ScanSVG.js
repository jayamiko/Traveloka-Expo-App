import React from "react";
import Svg, { Path } from "react-native-svg";

function ScanSVG() {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24">
      <Path
        fill="#0B7AFF"
        d="M9 4H8a4 4 0 0 0-4 4v1a.707.707 0 0 0 1 0V8a3 3 0 0 1 3-3h1a.707.707 0 0 0 0-1zm0 15H8a3 3 0 0 1-3-3v-1a.707.707 0 0 0-1 0v1a4 4 0 0 0 4 4h1a.707.707 0 0 0 0-1zm6 1a.707.707 0 0 1 0-1h1a3 3 0 0 0 3-3v-1a.707.707 0 0 1 1 0v1a4 4 0 0 1-4 4h-1zm0-15a.707.707 0 0 1 0-1h1a4 4 0 0 1 4 4v1a.707.707 0 0 1-1 0V8a3 3 0 0 0-3-3h-1z"
      />
      <Path
        fill="#C3DEFE"
        d="M7 9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9Z"
      />
      <Path
        stroke="#0B7AFF"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M2 12h20"
      />
    </Svg>
  );
}

export default ScanSVG;
