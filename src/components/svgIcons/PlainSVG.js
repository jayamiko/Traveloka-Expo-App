import React from "react";
import Svg, { Path } from "react-native-svg";

function PlainSVG({ color }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      data-id="IcProductDuotoneFlightFill"
      width="24"
      height="24"
    >
      <Path
        fill={color ?? "#FFF"}
        d="M8.793 4.207 7 6l2 2 1.793-1.793a1 1 0 0 0 0-1.414l-.586-.586a1 1 0 0 0-1.414 0ZM17.793 13.207 16 15l2 2 1.793-1.793a1 1 0 0 0 0-1.414l-.586-.586a1 1 0 0 0-1.414 0Z"
      />
      <Path
        fill={color ?? "#FFF"}
        d="M14 7 2.823 3.274a1 1 0 0 0-1.21.502l-.218.434a1 1 0 0 0 .34 1.28L10 11l3 3 5.51 8.265a1 1 0 0 0 1.28.34l.434-.217a1 1 0 0 0 .502-1.21L17 10l-3-3ZM3.532 14.691 6 15l3 3 .309 2.468a2 2 0 0 1-1.242 2.105l-.213.085a1 1 0 0 1-1.266-.481L5 19l-3.177-1.588a1 1 0 0 1-.481-1.266l.085-.213a2 2 0 0 1 2.105-1.242Z"
      />
      <Path
        fill={color ?? "#FFF"}
        d="M5.683 19.658 9 18l4.44-3.7a22.99 22.99 0 0 0 2.868-2.854l5.553-6.594a1.926 1.926 0 0 0-2.713-2.713l-6.594 5.553A22.997 22.997 0 0 0 9.7 10.56L6 15l-1.658 3.317c-.43.86.482 1.771 1.341 1.341Z"
      />
    </Svg>
  );
}

export default PlainSVG;
