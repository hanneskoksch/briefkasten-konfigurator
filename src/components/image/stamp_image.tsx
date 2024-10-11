import { Stamp } from "../../model/image_data_models";

interface StampImageProps {
  stamp: Stamp;
  onDelete: () => void;
}

const StampImage = ({ stamp, onDelete }: StampImageProps) => {
  return (
    <div>
      <img className="pointer-events-none" src={stamp.image} alt="Stempel" />
      {/* <button
        onClick={() => onDelete()}
        className="absolute right-0 top-0 h-6 w-6 rounded-full bg-red-600"
      >
        <p className="text-sm">X</p>
      </button> */}
    </div>
  );
};

export default StampImage;
