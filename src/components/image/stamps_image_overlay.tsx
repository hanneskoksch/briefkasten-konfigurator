import React from "react";
import { Stamp } from "../../model/image_data_models";
import StampImage from "./stamp_image";

interface StampsImageOverlayProps {
  stamps: (Stamp | null)[];
}

const StampsImageOverlay = ({ stamps }: StampsImageOverlayProps) => {
  let arr = [];
  for (let i = 0; i < 9; i++) {
    if (stamps[i] != null) {
      arr.push(<StampImage stamp={stamps[i]!} position={i} key={i} />);
    } else {
      arr.push(null);
    }
  }
  return <div>{arr}</div>;
};

export default StampsImageOverlay;
