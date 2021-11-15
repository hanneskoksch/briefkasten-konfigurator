import React from "react";
import { StampsMap } from "../model/image_data_models";
import StampImage from "./stamp_image";

interface StampsImageOverlayProps {
  stamps: StampsMap;
}

const StampsImageOverlay = ({ stamps }: StampsImageOverlayProps) => {
  let arr = [];
  for (let i = 0; i < 9; i++) {
    if (stamps[i] != null) {
      arr.push(<StampImage stamp={stamps[i]!} position={i} key={i} />);
    }
  }
  return <div>{arr}</div>;
};

export default StampsImageOverlay;
