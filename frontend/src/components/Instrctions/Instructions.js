import React, { useState } from 'react'

import { poseImages } from '../../utils/pose_images'

import './Instructions.css'

export default function Instructions({ currentPose }) {

    return (
        <div className="instructions-container">
            <img 
                className="pose-demo-img"
                src={poseImages[currentPose]}
            />
        </div>
    )
}
