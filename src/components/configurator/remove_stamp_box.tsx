import { FaTrash } from "react-icons/fa";

interface RemoveStampBoxProps  {
    onClick: Function,
}

const RemoveStampBox = ({onClick}: RemoveStampBoxProps) => {
  return (
    <div className="flex justify-center">
      <div className="h-8 w-8 bg-gray-200 hover:bg-red-200 font-bold rounded flex justify-center items-center cursor-pointer " onClick={() => onClick()}>
        <FaTrash />
      </div>
    </div>
  );
};

export default RemoveStampBox;
