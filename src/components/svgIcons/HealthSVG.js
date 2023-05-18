import React from "react";
import Svg, { G, Path } from "react-native-svg";

function HealthSVG() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="red"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={0}
      width="24"
      height="24"
    >
      <G fill="none" fillRule="evenodd" stroke="none">
        <Path d="M0 0h24v24H0z" />
        <Path
          fill="red"
          fillRule="nonzero"
          d="M13 11V9a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2Zm8.944-5.877c2.025 3.863 1.047 8.016-2.004 11.698C17.542 19.716 14.005 22 12.002 22c-2.004 0-5.542-2.284-7.941-5.178C1.008 13.139.03 8.986 2.094 5.055c2.258-3.588 5.715-3.99 9.907-1.333 4.19-2.656 7.648-2.252 9.943 1.4Z"
        />
      </G>
    </Svg>
  );
}

export default HealthSVG;
