import React from 'react'
import { BaseColor } from '../../utils/enums'
import BaseColorThumbnail from './base_color_thumbnail'

const BaseColorList = () => {
    return (
        <div className="flex">
            <BaseColorThumbnail onClick={() => {}} colorClass="bg-gazeblue"/>
            <BaseColorThumbnail onClick={() => {}} colorClass="bg-gazeblue"/>
            <BaseColorThumbnail onClick={() => {}} colorClass="bg-gazeblue"/>
            <BaseColorThumbnail onClick={() => {}} colorClass="bg-gazeblue"/>
        </div>
    )
}

export default BaseColorList
