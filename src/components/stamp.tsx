import React, { FC } from "react";
import stampImage from "../img/stempel-schnecke1.png";
import StampPosition from "../model/image_data_models";

const Stamp: FC<StampPosition> = ({ left, top }) => {
  return (
    <img
      className={`absolute`}
      src={stampImage}
      alt="Stempel"
      style={{
        left: `${left}px`,
        top: `${top}px`,
      }}
    />
  );
};

export default Stamp;
