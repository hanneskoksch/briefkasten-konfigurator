import { BaseColor } from "../../utils/enums";
import { baseDatabase } from "../../utils/stamps_database";
import BaseColorThumbnail from "./base_color_thumbnail";

interface BaseColorListProps {
  onClick: (color: BaseColor) => void;
  baseColor: BaseColor;
}

const BaseColorList = ({ onClick, baseColor }: BaseColorListProps) => {
  return (
    <div className="flex">
      {baseDatabase.map((base, i) => (
        <BaseColorThumbnail
          key={i}
          onClick={onClick}
          baseColor={baseColor}
          colorClass={base.enum!}
        />
      ))}
    </div>
  );
};

export default BaseColorList;
