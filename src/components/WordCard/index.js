import React,{useState} from 'react'
import Box3d from './Box3d'
export default function WordCard({word,translation}) {
    const [rotate, setRotate] = useState({x:0,y:0,z:0})
    return (
        <div onClick={()=>{
            setRotate({...rotate,x:rotate.x+90})
        }} style={{width:'100%'}}> 
           
            <Box3d faces={{front:word,bottom:translation,back:word,top:translation}} rotate={rotate} />
        </div>
    )
}
