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
      className={`duration-50 m-1 h-16 w-16 cursor-pointer rounded-full bg-center transition ease-in-out hover:scale-105 ${colorClass} ${
        baseColor === colorClass && "border-4 border-gray-800"
      }`}
      onClick={() => onClick(colorClass)}
    ></div>
  );
};

export default BaseColorThumbnail;
