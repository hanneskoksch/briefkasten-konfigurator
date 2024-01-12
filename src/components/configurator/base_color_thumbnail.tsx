import { BaseColor } from "../../utils/enums";

interface ColorThumbnailProps {
  colorClass: BaseColor;
  baseColor: BaseColor;
  onClick: Function;
}

const BaseColorThumbnail = ({
  colorClass,
  onClick,
  baseColor,
}: ColorThumbnailProps) => {
  return (
    <div
      className={`w-16 h-16 m-1 transition ease-in-out bg-center rounded-full cursor-pointer hover:scale-105 duration-50 ${colorClass} ${
        baseColor === colorClass && "border-4 border-gray-800"
      }`}
      onClick={() => onClick(colorClass)}
    ></div>
  );
};

export default BaseColorThumbnail;
