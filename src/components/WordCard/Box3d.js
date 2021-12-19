import React from 'react'
import './index.css'
import {Delete as DeleteIcon,Edit as EditIcon, ArrowLeft,ArrowRight} from '@mui/icons-material';


export default function index(props) {
    const style = {}
    return (
        <div style={{userSelect:'none'}} className="scene">
            <div onTouchEnd={props.onTouchEnd} onMouseDown={props.onMouseDown} onMouseUp={props.onMouseUp} onTouchStart={props.onTouchStart} className="cube" style={{ transform: `rotateX(${props.rotate.x}deg) rotateY(${props.rotate.y}deg) rotateZ(${props.rotate.z}deg)` }} >
                <div  className="face front" style={style}>   <ArrowLeft sx={{ display: { xs: 'none', md: 'block' } }} onClick={props.onClickToLeft} /> {props.faces.front}  <ArrowRight sx={{ display: { xs: 'none', md: 'block' } }} onClick={props.onClickToRight} /> </div>
                <div  className="face back" style={style}> <ArrowLeft sx={{ display: { xs: 'none', md: 'block' } }} onClick={props.onClickToLeft} /> {props.faces.back}  <ArrowRight sx={{ display: { xs: 'none', md: 'block' } }} onClick={props.onClickToRight}/></div>
                <div  className="face top" style={style}> <ArrowLeft sx={{ display: { xs: 'none', md: 'block' } }} onClick={props.onClickToLeft} /> {props.faces.top}  <ArrowRight sx={{ display: { xs: 'none', md: 'block' } }} onClick={props.onClickToRight}/></div>
                <div  className="face bottom" style={style}> <ArrowLeft sx={{ display: { xs: 'none', md: 'block' } }} onClick={props.onClickToLeft} /> {props.faces.bottom}  <ArrowRight sx={{ display: { xs: 'none', md: 'block' } }} onClick={props.onClickToRight}/></div>
                <div  onClick={props.onDelete} className="face left" style={style}><DeleteIcon /></div>
                <div  onClick={props.onUpdate} className="face right" style={style}><EditIcon /></div>
            </div>
           
        </div>
    )
}
