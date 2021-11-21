import React from "react";
import { BaseColor } from "../../utils/enums";

interface ColorThumbnailProps {
  colorClass: BaseColor;
  baseColor: BaseColor;
  onClick: Function;
}

const BaseColorThumbnail = ({ colorClass, onClick, baseColor }: ColorThumbnailProps) => {  return (
    <div className={`h-16 w-16 m-1 rounded-full bg-center ${colorClass} ${baseColor === colorClass && 'border-4 border-gray-800'}`} onClick={() => onClick(colorClass)}></div>
  );
};

export default BaseColorThumbnail;
