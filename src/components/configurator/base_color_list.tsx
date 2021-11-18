import React from 'react'
import { BaseColor } from '../../utils/enums'
import BaseColorThumbnail from './base_color_thumbnail'

const BaseColorList = () => {
    return (
        <div className="flex">
            <BaseColorThumbnail onClick={() => {}} baseColor={BaseColor.Blue}/>
            <BaseColorThumbnail onClick={() => {}} baseColor={BaseColor.Blue}/>
            <BaseColorThumbnail onClick={() => {}} baseColor={BaseColor.Blue}/>
            <BaseColorThumbnail onClick={() => {}} baseColor={BaseColor.Blue}/>
        </div>
    )
}

export default BaseColorList
