import { type Stamp } from "../../model/image_data_models";
import PositionBlock from "./position_block";
import RemoveStampBox from "./remove_stamp_box";

interface StampListItemProps {
  stamp: Stamp;
  index: number;
  onRemove: (index: number) => void;
  onPositionChange: (oldPosition: number, newPosition: number) => void;
}

const StampListItem = ({
  stamp,
  index,
  onRemove,
  onPositionChange,
}: StampListItemProps) => {
  return (
    <div className="my-2 flex items-center justify-between rounded bg-gray-100 p-2">
      <img className="h-16 w-16" src={stamp.image} alt="Stempel" />
      <RemoveStampBox onClick={() => onRemove(index)} />
      <PositionBlock
        position={stamp.position!}
        onChangePosition={onPositionChange}
      />
    </div>
  );
};

export default StampListItem;
