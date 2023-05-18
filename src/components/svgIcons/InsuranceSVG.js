import React from "react";
import Svg, { Path } from "react-native-svg";

function InsuranceSVG() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      data-id="IcProductInsuranceFill"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <Path
        stroke="#153E7E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m10 12 1.5 1.5 2.75-2.75"
      />
      <Path
        stroke="#153E7E"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="m12 21 9-9-6-6m-3-3-9 9 6 6"
      />
    </Svg>
  );
}

export default InsuranceSVG;
