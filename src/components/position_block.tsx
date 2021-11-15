import React from 'react'

interface PositionBlockProps  {
    position?: number,
    onChangePosition: Function,
}

const PositionBlock = ({position, onChangePosition}: PositionBlockProps) => {
    return (
        <div className=" h-32 w-32 grid grid-rows-3 grid-flow-col gap-1">
          <div className={"rounded-md hover:bg-gray-400 " + (position === 0 ? 'bg-gray-800' : 'bg-gray-200')} onClick={() => onChangePosition()} title="0"></div>
          <div className={"rounded-md hover:bg-gray-400 " + (position === 3 ? 'bg-gray-800' : 'bg-gray-200')} onClick={() => onChangePosition()} title="3"></div>
          <div className={"rounded-md hover:bg-gray-400 " + (position === 6 ? 'bg-gray-800' : 'bg-gray-200')} onClick={() => onChangePosition()} title="6"></div>

          <div className={"rounded-md hover:bg-gray-400 " + (position === 1 ? 'bg-gray-800' : 'bg-gray-200')} onClick={() => onChangePosition()} title="1"></div>
          <div className={"rounded-md hover:bg-gray-400 " + (position === 4 ? 'bg-gray-800' : 'bg-gray-200')} onClick={() => onChangePosition()} title="4"></div>
          <div className={"rounded-md hover:bg-gray-400 " + (position === 7 ? 'bg-gray-800' : 'bg-gray-200')} onClick={() => onChangePosition()} title="7"></div>

          <div className={"rounded-md hover:bg-gray-400 " + (position === 2 ? 'bg-gray-800' : 'bg-gray-200')} onClick={() => onChangePosition()} title="2"></div>
          <div className={"rounded-md hover:bg-gray-400 " + (position === 5 ? 'bg-gray-800' : 'bg-gray-200')} onClick={() => onChangePosition()} title="5"></div>
          <div className={"rounded-md hover:bg-gray-400 " + (position === 8 ? 'bg-gray-800' : 'bg-gray-200')} onClick={() => onChangePosition()} title="8"></div>

        </div>
    )
}

export default PositionBlock
