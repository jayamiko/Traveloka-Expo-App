import React from "react";
import Svg, { Path } from "react-native-svg";

function FinancialSVG() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="green"
      stroke="green"
      strokeLinecap="round"
      strokeWidth={0}
      width="24"
      height="24"
    >
      <Path
        stroke="none"
        d="M19 17h-3c-.552 0-1-.444-1-1 0-.552.444-1 1-1h3V9H3v1h3c.552 0 1 .444 1 1 0 .552-.444 1-1 1H3v6h16v-1Zm3-1V6H5a1 1 0 1 1 0-2h18a1 1 0 0 1 1 1v11a1 1 0 0 1-2 0ZM2 7h18a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Zm9 11c-2.246 0-4-2.046-4-4.5S8.754 9 11 9s4 2.046 4 4.5-1.754 4.5-4 4.5Zm0-2c1.067 0 2-1.088 2-2.5s-.933-2.5-2-2.5-2 1.088-2 2.5.933 2.5 2 2.5Z"
      />
    </Svg>
  );
}

export default FinancialSVG;
