import React from "react";
import { Stamp } from "../../model/image_data_models";

interface StampImageProps {
  stamp: Stamp;
}

const StampImage = ({ stamp }: StampImageProps) => {
  return (
    <img
      className="absolute top-0 left-0"
      src={stamp.images[stamp.position!]}
      alt="Stempel"
    />
  );
};

export default StampImage;
