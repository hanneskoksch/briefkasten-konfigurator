import React from 'react'
import PositionBlock from './position_block'
import RemoveStampBox from './remove_stamp_box';

interface StampListItemProps  {
    name: String,
}

const StampListItem = ({name}: StampListItemProps) => {
    return (
        <div className="bg-white rounded p-2 flex w-64 justify-between">
            <div>
                <div className="font-bold">{name}</div>
                <RemoveStampBox onClick={() => {}}/>
            </div>
            <PositionBlock position={1} onChangePosition={() => {}}/>
            
        </div>
    )
}

export default StampListItem
