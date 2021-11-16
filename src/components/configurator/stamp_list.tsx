import React from "react";
import { Stamp } from "../../model/image_data_models";
import StampListItem from "./stamp_list_item";

interface StampListProps {
  stamps: (Stamp | null)[];
  onRemove: Function,
  onPositionChange: Function,
}

const StampList = ({ stamps, onRemove, onPositionChange }: StampListProps) => {
  let stampsArray = [];
  for (let i = 0; i < 9; i++) {
    if (stamps[i] != null) {
      stampsArray.push(<StampListItem stamp={stamps[i]!} position={i} key={i} onRemove={onRemove} onPositionChange={onPositionChange} />);
    } else {
      stampsArray.push(null);
    }
  }
  return (
    <div className="w-52">
      {stampsArray}
    </div>
  );
};

export default StampList;
