import React, { useEffect, useState } from 'react'
import Box3d from './Box3d'
import { setAllSwipeRotation, setOneSwipeRotation } from "../../app/Slices/WordsSlice"
import { useDispatch } from 'react-redux'
export default function WordCard({ word, translation, swipeRotation, id }) {
    const [rotate, setRotate] = useState({ x: 0, y: 0, z: 0 })
    const [swipeStart, setSwipeStart] = useState(null)
    const [swipeEnd, setSwipeEnd] = useState(null)

    const dispatch = useDispatch()

    const setSwipeRotation = (rotation, id) => {

        dispatch(setOneSwipeRotation({
            id,
            swipeRotation: rotation
        }))
    }



    useEffect(() => {
        if (swipeStart && swipeEnd) {
            console.log(swipeStart, swipeEnd, swipeStart - swipeEnd);
            if (swipeStart - swipeEnd > 100) {
                if (swipeRotation == "center") setSwipeRotation("left", id)
                else if (swipeRotation == "right") setSwipeRotation("center", id)
            } else if (swipeEnd - swipeStart > 100) {
                if (swipeRotation == "center") setSwipeRotation("right", id)
                else if (swipeRotation == "left") setSwipeRotation("center", id)
            }
        }
    }, [swipeStart, swipeEnd])



    useEffect(() => {
        console.log("use effect");
        if (swipeRotation != "center") {
            dispatch(setAllSwipeRotation({ rotation: "center", id: id }))
        }
        if (swipeRotation === "left") {
            console.log("left e geldi");
            console.log(rotate.x);
            if (rotate.x / 90 == 0) setRotate({ x: rotate.x, y: rotate.y - 45, z: rotate.z })
            if (rotate.x / 90 == 1) setRotate({ x: rotate.x, y: rotate.y, z: rotate.z + 45 })
            if (rotate.x / 90 == 2) setRotate({ x: rotate.x, y: rotate.y+45, z: rotate.z })
            if (rotate.x / 90 == 3) setRotate({ x: rotate.x, y: rotate.y, z: rotate.z -45})

        } else if (swipeRotation === "right") {
            console.log("right e geldi");
            setRotate({ x: rotate.x, y: rotate.y + 45, z: rotate.z })
        } else if (swipeRotation === "center") {
            console.log("center e geldi");
            setRotate({ x: rotate.x, y: 0, z: rotate.z })
        }
    }, [swipeRotation])
    return (
        <div onClick={() => {
            rotate.x == 270 ? setRotate({ x: 0, y: 0, z: 0 }) : setRotate({ ...rotate, x: rotate.x + 90 })
        }} style={{ width: '100%' }}>

            <Box3d onTouchEnd={(e) => {
                //console.log("End ",e)
                setSwipeEnd(e.changedTouches[0].clientX)
            }} onTouchStart={(e) => {
                // console.log("Start ",e);
                setSwipeStart(e.changedTouches[0].clientX)
            }} faces={{ front: word, bottom: translation, back: word, top: translation }} rotate={rotate} />
        </div>
    )
}
