import React from "react";
import Svg, { Path } from "react-native-svg";

function BlueSaveSVG() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      data-id="IcUserSavedItem"
      width="24"
      height="24"
    >
      <Path
        stroke="#0194f3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v15.168a1 1 0 0 1-1.54.841l-4.92-3.161a1 1 0 0 0-1.08 0L6.54 21.01A1 1 0 0 1 5 20.168V5Z"
        clipRule="evenodd"
      />
      <Path
        stroke="#0194F3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m9.25 10.5 2 2 4-3.5"
      />
    </Svg>
  );
}

export default BlueSaveSVG;
