import { stampsDatabase } from "../../utils/stamps_database";

interface StampSelectorBoxesProps {
  onClick: Function;
}

const StampSelectorBoxes = ({ onClick }: StampSelectorBoxesProps) => {
  return (
    <div className="flex justify-center">
      {stampsDatabase.map((stamp, i) => (
        <div
          className="m-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded bg-gray-200 p-2 font-bold hover:bg-green-200 "
          onClick={() => onClick(i)}
          key={i}
        >
          <img src={stamp.image} alt="Stempel" />
        </div>
      ))}
    </div>
  );
};

export default StampSelectorBoxes;
