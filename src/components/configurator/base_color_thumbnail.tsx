import React from "react";
import { BaseColor } from "../../utils/enums";

interface ColorThumbnailProps {
  colorClass: String;
  onClick: Function;
}

const BaseColorThumbnail = ({ colorClass }: ColorThumbnailProps) => {  return (
    <div className={"h-16 w-16 m-1 border-4 border-gray-800 rounded-full bg-glazeblue " + colorClass}>
      {
        //todo image from image database
      }
    </div>
  );
};

export default BaseColorThumbnail;
