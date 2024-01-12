import { BaseColor } from "../../utils/enums";
import BaseColorThumbnail from "./base_color_thumbnail";
import { baseDatabase } from "../../utils/stamps_database";

interface BaseColorListProps {
  onClick: Function;
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
