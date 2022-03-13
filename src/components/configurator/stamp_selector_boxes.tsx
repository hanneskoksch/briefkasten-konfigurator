import React from "react";
import { stampsDatabase } from "../../utils/stamps_database";

interface StampSelectorBoxesProps {
  onClick: Function;
}

const StampSelectorBoxes = ({ onClick }: StampSelectorBoxesProps) => {
  return (
    <div className="flex justify-center">
      {stampsDatabase.map((stamp, i) => (
        <div
          className="h-10 w-10 m-2 p-2 bg-gray-200 hover:bg-green-200 font-bold rounded flex justify-center items-center cursor-pointer "
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
