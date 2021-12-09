import React from 'react'
import './index.css'
export default function index(props) {
    const style = {}
    return (
        <div className="scene">
            <div className="cube" style={{transform:`rotateX(${props.rotate.x}deg) rotateY(${props.rotate.y}deg) rotateZ(${props.rotate.z}deg)`}} >
                <div className="face front" style={style}> {props.faces.front} </div>
                <div className="face back" style={style}> {props.faces.back} </div>
                <div className="face top" style={style}> {props.faces.top} </div>
                <div className="face bottom" style={style}> {props.faces.bottom} </div>
            </div>
        </div>
    )
}
