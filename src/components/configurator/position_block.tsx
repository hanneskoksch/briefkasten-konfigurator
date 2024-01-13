interface PositionBlockProps {
  position: number;
  onChangePosition: (oldPosition: number, newPosition: number) => void;
}

const PositionBlock = ({ position, onChangePosition }: PositionBlockProps) => {
  return (
    <div className="grid h-20 w-20 grid-flow-col grid-rows-3 gap-1">
      <div
        className={
          "cursor-pointer rounded-md " +
          (position === 0 ? "bg-gray-800" : "bg-gray-200 hover:bg-gray-400")
        }
        onClick={() => onChangePosition(position, 0)}
        title="0"
      ></div>
      <div
        className={
          "cursor-pointer rounded-md " +
          (position === 3 ? "bg-gray-800" : "bg-gray-200 hover:bg-gray-400")
        }
        onClick={() => onChangePosition(position, 3)}
        title="3"
      ></div>
      <div
        className={
          "cursor-pointer rounded-md " +
          (position === 6 ? "bg-gray-800" : "bg-gray-200 hover:bg-gray-400")
        }
        onClick={() => onChangePosition(position, 6)}
        title="6"
      ></div>

      <div
        className={
          "cursor-pointer rounded-md " +
          (position === 1 ? "bg-gray-800" : "bg-gray-200 hover:bg-gray-400")
        }
        onClick={() => onChangePosition(position, 1)}
        title="1"
      ></div>
      <div
        className={
          "cursor-pointer rounded-md " +
          (position === 4 ? "bg-gray-800" : "bg-gray-200 hover:bg-gray-400")
        }
        onClick={() => onChangePosition(position, 4)}
        title="4"
      ></div>
      <div
        className={
          "cursor-pointer rounded-md " +
          (position === 7 ? "bg-gray-800" : "bg-gray-200 hover:bg-gray-400")
        }
        onClick={() => onChangePosition(position, 7)}
        title="7"
      ></div>

      <div
        className={
          "cursor-pointer rounded-md " +
          (position === 2 ? "bg-gray-800" : "bg-gray-200 hover:bg-gray-400")
        }
        onClick={() => onChangePosition(position, 2)}
        title="2"
      ></div>
      <div
        className={
          "cursor-pointer rounded-md " +
          (position === 5 ? "bg-gray-800" : "bg-gray-200 hover:bg-gray-400")
        }
        onClick={() => onChangePosition(position, 5)}
        title="5"
      ></div>
      <div
        className={
          "cursor-pointer rounded-md " +
          (position === 8 ? "bg-gray-800" : "bg-gray-200 hover:bg-gray-400")
        }
        onClick={() => onChangePosition(position, 8)}
        title="8"
      ></div>
    </div>
  );
};

export default PositionBlock;
