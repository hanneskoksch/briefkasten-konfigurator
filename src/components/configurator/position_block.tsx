interface PositionBlockProps {
  position: number;
  onChangePosition: Function;
}

const PositionBlock = ({ position, onChangePosition }: PositionBlockProps) => {
  return (
    <div className="h-20 w-20 grid grid-rows-3 grid-flow-col gap-1">
      <div
        className={
          "rounded-md cursor-pointer " +
          (position === 0 ? "bg-gray-800" : "bg-gray-200 hover:bg-gray-400")
        }
        onClick={() => onChangePosition(position, 0)}
        title="0"
      ></div>
      <div
        className={
          "rounded-md cursor-pointer " +
          (position === 3 ? "bg-gray-800" : "bg-gray-200 hover:bg-gray-400")
        }
        onClick={() => onChangePosition(position, 3)}
        title="3"
      ></div>
      <div
        className={
          "rounded-md cursor-pointer " +
          (position === 6 ? "bg-gray-800" : "bg-gray-200 hover:bg-gray-400")
        }
        onClick={() => onChangePosition(position, 6)}
        title="6"
      ></div>

      <div
        className={
          "rounded-md cursor-pointer " +
          (position === 1 ? "bg-gray-800" : "bg-gray-200 hover:bg-gray-400")
        }
        onClick={() => onChangePosition(position, 1)}
        title="1"
      ></div>
      <div
        className={
          "rounded-md cursor-pointer " +
          (position === 4 ? "bg-gray-800" : "bg-gray-200 hover:bg-gray-400")
        }
        onClick={() => onChangePosition(position, 4)}
        title="4"
      ></div>
      <div
        className={
          "rounded-md cursor-pointer " +
          (position === 7 ? "bg-gray-800" : "bg-gray-200 hover:bg-gray-400")
        }
        onClick={() => onChangePosition(position, 7)}
        title="7"
      ></div>

      <div
        className={
          "rounded-md cursor-pointer " +
          (position === 2 ? "bg-gray-800" : "bg-gray-200 hover:bg-gray-400")
        }
        onClick={() => onChangePosition(position, 2)}
        title="2"
      ></div>
      <div
        className={
          "rounded-md cursor-pointer " +
          (position === 5 ? "bg-gray-800" : "bg-gray-200 hover:bg-gray-400")
        }
        onClick={() => onChangePosition(position, 5)}
        title="5"
      ></div>
      <div
        className={
          "rounded-md cursor-pointer " +
          (position === 8 ? "bg-gray-800" : "bg-gray-200 hover:bg-gray-400")
        }
        onClick={() => onChangePosition(position, 8)}
        title="8"
      ></div>
    </div>
  );
};

export default PositionBlock;
