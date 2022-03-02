import React from "react";
import { Stamp } from "../../model/image_data_models";
import StampImage from "./stamp_image";

interface StampsImageOverlayProps {
  stamps: Stamp[];
}

const StampsImageOverlay = ({ stamps }: StampsImageOverlayProps) => {
  return (
    <div>
      {stamps.map((stamp, i) => (
        <StampImage stamp={stamp} key={i} />
      ))}
    </div>
  );
};

export default StampsImageOverlay;
