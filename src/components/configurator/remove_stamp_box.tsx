import { FaTrash } from "react-icons/fa";

interface RemoveStampBoxProps {
  onClick: React.MouseEventHandler;
}

const RemoveStampBox = ({ onClick }: RemoveStampBoxProps) => {
  return (
    <div className="flex justify-center">
      <div
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded bg-gray-200 font-bold hover:bg-red-200"
        onClick={onClick}
      >
        <FaTrash />
      </div>
    </div>
  );
};

export default RemoveStampBox;
