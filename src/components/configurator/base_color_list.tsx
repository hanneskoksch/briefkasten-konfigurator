import React from "react";
import { BaseColor } from "../../utils/enums";
import BaseColorThumbnail from "./base_color_thumbnail";

interface BaseColorListProps {
  onClick: Function;
  baseColor: BaseColor;
}

const BaseColorList = ({onClick, baseColor}: BaseColorListProps) => {
  return (
    <div className="flex">
      <BaseColorThumbnail onClick={onClick} baseColor={baseColor} colorClass={BaseColor.Blue} />
      <BaseColorThumbnail onClick={onClick} baseColor={baseColor} colorClass={BaseColor.White} />
      <BaseColorThumbnail onClick={onClick} baseColor={baseColor} colorClass={BaseColor.Grey} />
      <BaseColorThumbnail onClick={onClick} baseColor={baseColor} colorClass={BaseColor.Green} />
    </div>
  );
};

export default BaseColorList;
