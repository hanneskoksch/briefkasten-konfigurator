import React from "react";
import { BaseColor } from "../../utils/enums";

interface ColorThumbnailProps {
  baseColor: BaseColor;
  onClick: Function;
}

const BaseColorThumbnail = ({ baseColor }: ColorThumbnailProps) => {  return (
    <div className="h-16 w-16 m-1 border-4 border-gray-800 rounded-full bg-blue-400">
      {
        //todo image from image database
      }
    </div>
  );
};

export default BaseColorThumbnail;
