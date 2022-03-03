import React from "react";
import { FaPlus } from "react-icons/fa";

interface AddStampBoxProps {
  onClick: Function;
}

const AddStampBox = ({ onClick }: AddStampBoxProps) => {
  return (
    <div className="flex justify-center">
      <div
        className="h-8 w-8 m-2 bg-gray-200 hover:bg-green-200 font-bold rounded flex justify-center items-center cursor-pointer "
        onClick={() => onClick()}
      >
        <FaPlus />
      </div>
    </div>
  );
};

export default AddStampBox;
