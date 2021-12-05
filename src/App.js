import React, { useState } from 'react'
import AppBar from './components/common/AppBar';
//import stack and slider
import { Stack, Slider} from "@mui/material"
import Cube from './components/cube';
export default function App() {
  const [rotate, setRotate] = useState({x:0, y:0, z:0});
  return (
    <div className="container" >
      <Stack className="sliders" spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <Slider aria-label="Volume" max={360} value={rotate.x} onChange={(e,v)=>{ setRotate({x:v,y:rotate.y,z:rotate.z})  }} />
        <Slider aria-label="Volume" max={360} value={rotate.y} onChange={(e,v)=>{ setRotate({x:rotate.x,y:v,z:rotate.z})  }} />
        <Slider aria-label="Volume" max={360} value={rotate.z} onChange={(e,v)=>{ setRotate({x:rotate.x,y:rotate.y,z:v})  }} />
      </Stack>
      

      <Cube rotate={{ x: rotate.x, y: rotate.y, z: rotate.z }} />
    </div>
  )
}
