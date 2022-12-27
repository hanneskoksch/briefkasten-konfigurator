import React from "react";
import { Stamp } from "../../model/image_data_models";

interface StampImageProps {
  stamp: Stamp;
}

const StampImage = ({ stamp }: StampImageProps) => {
  const getStampPosition = () => {
    switch (stamp.position) {
      case 0:
        return "top-row left";
      case 1:
        return "top-row center";
      case 2:
        return "top-row right";
      case 3:
        return "middle-row left";
      case 4:
        return "middle-row center";
      case 5:
        return "middle-row right";
      case 6:
        return "bottom-row left";
      case 7:
        return "bottom-row center";
      case 8:
        return "bottom-row right";
      default:
        return "top-row left";
    }
  };

  return (
    <img
      className={`relative custom-stamp top-row left ${getStampPosition()}`}
      src={stamp.image}
      alt="Stempel"
    />
  );
};

export default StampImage;
