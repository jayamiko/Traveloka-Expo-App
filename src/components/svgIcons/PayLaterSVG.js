import React from "react";
import Svg, { G, Path } from "react-native-svg";

function PayLaterSVG() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      data-id="IcPaymentPayLater"
      width="24"
      height="24"
    >
      <G fill="none" fillRule="evenodd">
        <Path d="M0 0h24v24H0z" />
        <Path
          stroke="#0194F3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.5 10h2.218c.446 0 .607.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v2.436c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134H18.5a2.5 2.5 0 0 1-2.5-2.5h0a2.5 2.5 0 0 1 2.5-2.5Z"
        />
        <Path
          stroke="#0194F3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 19h3a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1H7m14 0V4a1 1 0 0 0-1-1H6a2 2 0 0 0-2 2v2"
        />
        <Path
          stroke="#0194F3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 11h10a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Zm4.75 6.75h.5v.5h-.5v-.5Zm-3 0h.5v.5h-.5v-.5Zm6-3h.5v.5h-.5v-.5Zm0 3h.5v.5h-.5v-.5Zm-3-3h.5v.5h-.5v-.5Zm-3 0h.5v.5h-.5v-.5ZM5 10v2m6-2v2"
        />
      </G>
    </Svg>
  );
}

export default PayLaterSVG;
