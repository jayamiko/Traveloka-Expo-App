import React from "react";
import Svg, { Path } from "react-native-svg";

function WalletSVG() {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" width="21" height="18">
      <Path
        fill="#1BA0E2"
        fillRule="evenodd"
        d="m20.01 7.171.003 3.623c-.026.345-.059.69-.099 1.034a1.272 1.272 0 0 1-1.122 1.105c-1.84.206-3.744.206-5.584 0a1.272 1.272 0 0 1-1.122-1.105 24.341 24.341 0 0 1 0-5.656 1.272 1.272 0 0 1 1.122-1.105 25.345 25.345 0 0 1 5.584 0c.587.065 1.055.53 1.122 1.105.039.333.071.666.096 1ZM16 7.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
        clipRule="evenodd"
      />
      <Path
        fill="#1BA0E2"
        d="M19.404 3.04c.155.269-.137.57-.446.536a26.846 26.846 0 0 0-5.916 0 2.772 2.772 0 0 0-2.446 2.422 25.846 25.846 0 0 0 0 6.004 2.772 2.772 0 0 0 2.446 2.422c1.95.218 3.966.218 5.916 0 .311-.035.606.269.449.54a4.971 4.971 0 0 1-3.78 2.45l-.652.068c-3.31.348-6.65.325-9.956-.069l-.432-.051a3.931 3.931 0 0 1-3.432-3.384 37.64 37.64 0 0 1 0-9.956A3.931 3.931 0 0 1 4.587.638l.432-.051a44.65 44.65 0 0 1 9.956-.069l.652.069a4.96 4.96 0 0 1 3.777 2.453Z"
      />
    </Svg>
  );
}

export default WalletSVG;
