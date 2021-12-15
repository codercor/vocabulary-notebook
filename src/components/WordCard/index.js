import React, { useEffect, useState } from 'react'
import Box3d from './Box3d'
import { setAllSwipeRotation, setOneSwipeRotation, deleteWord } from "../../app/Slices/WordsSlice"
import { useDispatch } from 'react-redux'
export default function WordCard({ word, translation, swipeRotation, id }) {
    const [rotate, setRotate] = useState({ x: 0, y: 0, z: 0 })
    const [swipeStart, setSwipeStart] = useState(null)
    const [swipeEnd, setSwipeEnd] = useState(null)
    const [faceName, setFaceName] = useState("front")//front, back, top, bottom

    const dispatch = useDispatch()

    const setSwipeRotation = (rotation, id) => {

        dispatch(setOneSwipeRotation({
            id,
            swipeRotation: rotation
        }))
    }

    useEffect(() => {
        if (rotate.x / 90 == 0) setFaceName("front")
        if (rotate.x / 90 == 1) setFaceName("bottom")
        if (rotate.x / 90 == 2) setFaceName("back")
        if (rotate.x / 90 == 3) setFaceName("top")
    }, [rotate]);

    useEffect(() => {
        console.log(faceName);
    }, [faceName]);

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
            console.log("r left");
            if (faceName == "front") setRotate({ x: rotate.x, y: rotate.y - 45, z: rotate.z })
            if (faceName == "bottom") setRotate({ x: rotate.x, y: rotate.y, z: rotate.z + 45 })
            if (faceName == "back") setRotate({ x: rotate.x, y: rotate.y+45, z: rotate.z })
            if (faceName == "top") setRotate({ x: rotate.x, y: rotate.y, z: rotate.z - 45 })
        } else if (swipeRotation === "right") {
            console.log("r right");
            if (faceName == "front") setRotate({ x: rotate.x, y: rotate.y + 45, z: rotate.z })
            if (faceName == "bottom") setRotate({ x: rotate.x, y: rotate.y, z: rotate.z  - 45 })
            if (faceName == "back") setRotate({ x: rotate.x, y: rotate.y-45, z: rotate.z })
            if (faceName == "top") setRotate({ x: rotate.x, y: rotate.y, z: rotate.z + 45 })
        } else if (swipeRotation === "center") {
            console.log("r center");
            setRotate({ x: rotate.x, y: 0, z: 0})
        }
    }, [swipeRotation])
    return (
        <div onClick={() => {
            if (swipeRotation != "center") {
                setSwipeRotation("center", id)
            }
            rotate.x == 270 ? setRotate({ x: 0, y: 0, z: 0 }) : setRotate({ ...rotate, x: rotate.x + 90 })


        }} style={{ width: '100%' }}>

            <Box3d onTouchEnd={(e) => {
                //console.log("End ",e)
                setSwipeEnd(e.changedTouches[0].clientX)
            }} onTouchStart={(e) => {
                // console.log("Start ",e);
                setSwipeStart(e.changedTouches[0].clientX)
            }} onDelete={(e)=>{
                e.stopPropagation();   
                dispatch(deleteWord({id}))       
            }}  faces={{ front: word, bottom: translation, back: word, top: translation }} rotate={rotate} />
        </div>
    )
}
