import React from 'react'
import './index.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export default function index(props) {
    const style = {}
    return (
        <div className="scene">
            <div onTouchEnd={props.onTouchEnd} onTouchStart={props.onTouchStart} className="cube" style={{ transform: `rotateX(${props.rotate.x}deg) rotateY(${props.rotate.y}deg) rotateZ(${props.rotate.z}deg)` }} >
                <div className="face front" style={style}> {props.faces.front} </div>
                <div className="face back" style={style}> {props.faces.back} </div>
                <div className="face top" style={style}> {props.faces.top} </div>
                <div className="face bottom" style={style}> {props.faces.bottom} </div>
                <div onClick={props.onDelete} className="face left" style={style}><DeleteIcon /></div>
                <div className="face right" style={style}><EditIcon /></div>
            </div>
        </div>
    )
}
