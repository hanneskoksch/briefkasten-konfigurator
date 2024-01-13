import { Stamp } from "../../model/image_data_models";
import StampListItem from "./stamp_list_item";

interface StampListProps {
  stamps: Stamp[];
  //stamps: (Stamp | null)[];
  onRemove: (index: number) => void;
  onPositionChange: (oldPosition: number, newPosition: number) => void;
}

const StampList = ({ stamps, onRemove, onPositionChange }: StampListProps) => {
  return (
    <div>
      {stamps.map((stamp, i) => (
        <StampListItem
          stamp={stamp}
          index={i}
          key={i}
          onRemove={onRemove}
          onPositionChange={onPositionChange}
        />
      ))}
    </div>
  );
};

export default StampList;
