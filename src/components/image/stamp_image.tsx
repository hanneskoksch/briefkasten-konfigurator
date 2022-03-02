import React from "react";
import schnecke1 from "../../img/stempel-schnecke1.png";
import { Stamp } from "../../model/image_data_models";
import stampPositions from "../../utils/stamp_positions";

interface StampImageProps {
  stamp: Stamp;
}

const StampImage = ({ stamp }: StampImageProps) => {
  return (
    <img
      className={`absolute`}
      src={schnecke1}
      alt="Stempel"
      style={{
        left: `${stampPositions[stamp.position!].left}px`,
        top: `${stampPositions[stamp.position!].top}px`,
      }}
    />
  );
};

export default StampImage;
