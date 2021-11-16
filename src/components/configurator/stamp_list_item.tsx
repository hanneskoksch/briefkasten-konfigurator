import React from 'react'
import { Stamp } from '../../model/image_data_models';
import PositionBlock from './position_block'
import RemoveStampBox from './remove_stamp_box';

interface StampListItemProps  {
    stamp: Stamp,
    position: number,
    onRemove: Function,
    onPositionChange: Function,
}

const StampListItem = ({stamp, position, onRemove, onPositionChange }: StampListItemProps) => {
    return (
        <div className="bg-white rounded p-2 flex justify-between">
            <div>
                <div className="font-bold">{stamp.name}</div>
                <RemoveStampBox onClick={() => onRemove(position)}/>
            </div>
            <PositionBlock position={position} onChangePosition={onPositionChange}/>
            
        </div>
    )
}

export default StampListItem
