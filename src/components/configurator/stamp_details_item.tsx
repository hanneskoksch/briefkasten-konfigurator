import { type Stamp } from "../../model/image_data_models";
import RemoveStampBox from "./remove_stamp_box";

interface StampDetailsItemProps {
  stamp: Stamp;
  index: number;
  onRemove: (index: number) => void;
}

const StampDetailsItem = ({
  stamp,
  index,
  onRemove,
}: StampDetailsItemProps) => {
  return (
    <div className="my-2 flex items-center justify-between">
      <img className="h-16 w-16" src={stamp.image} alt="Stempel" />
      <RemoveStampBox onClick={() => onRemove(index)} />
    </div>
  );
};

export default StampDetailsItem;
