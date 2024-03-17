import { BaseColor } from "../../utils/enums";

interface ColorThumbnailProps {
  colorClass: BaseColor;
  baseColor: BaseColor;
  onClick: (color: BaseColor) => void;
  name: string;
}

const BaseColorThumbnail = ({
  colorClass,
  onClick,
  baseColor,
  name,
}: ColorThumbnailProps) => {
  return (
    <div className="text-center">
    <div
      className={`duration-50 m-1 h-16 w-16 cursor-pointer rounded-full bg-center transition ease-in-out hover:scale-105 ${colorClass} ${
        baseColor === colorClass && "border-4 border-gray-800"
      }`}
      onClick={() => onClick(colorClass)}
    ></div>
    <p className="text-sm text-slate-800">
    {name}
    </p>
    </div>
  );
};

export default BaseColorThumbnail;
