import React from 'react'
import './index.css'
export default function index(props) {
    
    return (
        <div className="scene">
            <div className="cube" style={{transform:`rotateX(${props.rotate.x}deg) rotateY(${props.rotate.y}deg) rotateZ(${props.rotate.z}deg)`}} >
                <div className="face front"> Front </div>
                <div className="face back"> Back </div>
                <div className="face left"> Left </div>
                <div className="face right"> Right </div>
                <div className="face top"> Top </div>
                <div className="face bottom"> Bottom </div>
            </div>
        </div>
    )
}
