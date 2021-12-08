import { Slider } from '@mui/material'
import React,{useState} from 'react'
import Cube from '../components/Cube'
export default function WordCard() {
    const [rotate, setRotate] = useState({x:0,y:0,z:0})
    return (
        <div onClick={()=>{
            setRotate({...rotate,x:rotate.x+90})
        }} style={{width:'100%'}}> 
           
            <Cube rotate={rotate} />
        </div>
    )
}
