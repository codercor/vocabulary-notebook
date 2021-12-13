import React, { useEffect, useState } from 'react'
import Box3d from './Box3d'
export default function WordCard({ word, translation }) {
    const [rotate, setRotate] = useState({ x: 0, y: 0, z: 0 })
    const [swipeStart, setSwipeStart] = useState(null)
    const [swipeEnd, setSwipeEnd] = useState(null)
    const [swipeDirection, setSwipeDirection] = useState("center")
    useEffect(() => {
        if (swipeStart && swipeEnd) {
            console.log(swipeStart, swipeEnd,swipeStart-swipeEnd);
            if (swipeStart - swipeEnd > 100) {
                if(swipeDirection == "center") setSwipeDirection("left")
                else if(swipeDirection == "right") setSwipeDirection("center")
            } else if (swipeEnd - swipeStart > 100) {
                if(swipeDirection == "center") setSwipeDirection("right")
                else if(swipeDirection == "left") setSwipeDirection("center")
            }
        }
    }, [swipeStart, swipeEnd])
    useEffect(() => {
        if(swipeDirection === "left") {
            console.log("left e geldi");
            setRotate({ x: rotate.x, y: rotate.y-45, z: rotate.z })
        }else if(swipeDirection === "right") {
            console.log("right e geldi");
            setRotate({ x: rotate.x, y: rotate.y+45, z: rotate.z })
        }else if(swipeDirection === "center") {
            console.log("center e geldi");
            setRotate({ x: rotate.x, y: 0, z: rotate.z })
        }
    }, [swipeDirection])
    return (
        <div onClick={() => {
            setRotate({ ...rotate, x: rotate.x + 90 })
        }} style={{ width: '100%' }}>
            <Box3d onTouchEnd={(e)=>{
                //console.log("End ",e)
                setSwipeEnd(e.changedTouches[0].clientX)
            }} onTouchStart={(e) => {
               // console.log("Start ",e);
                setSwipeStart(e.changedTouches[0].clientX)
            }} faces={{ front: word, bottom: translation, back: word, top: translation }} rotate={rotate} />
        </div>
    )
}
