import React from "react";
import Svg, { G, Path } from "react-native-svg";

function ShuttleSVG() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#687176"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={0}
      width="24"
      height="24"
    >
      <G fill="none" fillRule="evenodd">
        <Path stroke="none" d="M0 0h24v24H0z" />
        <Path stroke="#40E0D0" strokeWidth={2} d="M2 21v1m10-1v1" />
        <Path
          fill="#40E0D0"
          fillRule="nonzero"
          stroke="none"
          d="M1.282 16h11.436c.446 0 .607.046.77.134a.906.906 0 0 1 .378.378c.088.163.134.324.134.77v2.436c0 .446-.046.607-.134.77a.909.909 0 0 1-.378.378c-.163.088-.324.134-.77.134H1.282c-.446 0-.607-.046-.77-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.324-.134-.77v-2.436c0-.446.046-.607.134-.77a.909.909 0 0 1 .378-.378c.163-.088.324-.134.77-.134zM3 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
        />
        <Path
          stroke="#40E0D0"
          strokeWidth={2}
          d="M1 15h2v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2h2m4-3v10"
        />
        <Path
          fill="#40E0D0"
          fillRule="nonzero"
          stroke="none"
          d="M13.846 0h6.308c1.337 0 1.822.14 2.311.4.49.262.873.646 1.134 1.135.262.489.401.974.401 2.31v4.31c0 1.336-.14 1.821-.4 2.31a2.726 2.726 0 0 1-1.135 1.134c-.489.262-.974.401-2.31.401h-6.31c-1.336 0-1.821-.14-2.31-.4a2.726 2.726 0 0 1-1.134-1.135c-.262-.489-.401-.974-.401-2.31v-4.31c0-1.336.14-1.821.4-2.31A2.726 2.726 0 0 1 11.536.4c.489-.262.974-.401 2.31-.401zM22 5h-3l-3-4h-1l1 4h-2l-1-1h-1v4h1l1-1h2l-1 4h1l3-4h3a1 1 0 0 0 0-2z"
        />
      </G>
    </Svg>
  );
}

export default ShuttleSVG;
