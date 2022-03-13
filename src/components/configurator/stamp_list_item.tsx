import React from "react";
import { Stamp } from "../../model/image_data_models";
import PositionBlock from "./position_block";
import RemoveStampBox from "./remove_stamp_box";

interface StampListItemProps {
  stamp: Stamp;
  index: number;
  onRemove: Function;
  onPositionChange: Function;
}

const StampListItem = ({
  stamp,
  index,
  onRemove,
  onPositionChange,
}: StampListItemProps) => {
  return (
    <div className="bg-gray-100 rounded p-2 flex justify-between my-2 items-center">
      <img src={stamp.image} alt="Stempel" />
      <RemoveStampBox onClick={() => onRemove(index)} />
      <PositionBlock
        position={stamp.position!}
        onChangePosition={onPositionChange}
      />
    </div>
  );
};

export default StampListItem;
