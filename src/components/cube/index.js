import React from 'react'
import './index.css'
export default function index(props) {
    const style = {}
    
    return (
        <div className="scene">
            <div className="cube" style={{transform:`rotateX(${props.rotate.x}deg) rotateY(${props.rotate.y}deg) rotateZ(${props.rotate.z}deg)`}} >
                <div className="face front" style={style}> Front </div>
                <div className="face back" style={style}> Back </div>
                <div className="face top" style={style}> Top </div>
                <div className="face bottom" style={style}> Bottom </div>
            </div>
        </div>
    )
}
