import React from "react";
import { Stamp, StampsMap } from ".././model/image_data_models";
import StampListItem from "./stamp_list_item";

interface StampListProps {
  stamps: StampsMap;
}

const StampList = ({ stamps }: StampListProps) => {
  let stampsArray: Stamp[] = [];
  for (let i = 0; i < 9; i++) {
    if (stamps[i] != null) {
      stampsArray.push(stamps[i]!);
    }
  }
  return (
    <div>
      {stampsArray.map((stamp, key) => (
        <StampListItem stamp={stamp} key={key} />
      ))}
    </div>
  );
};

export default StampList;
