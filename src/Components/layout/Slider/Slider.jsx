import {useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



export default function DiscreteSliderLabel() {

  const [value,setValue] =useState(10) 
  return (
<>
<h1>hi</h1>
<Slider
        aria-labelledby="range-slider"
        value={value}
       
        onChange={(e,value)=>setValue(value)}
      min={0}
      max={10000}
        valueLabelDisplay="on"
      />
      
</>

 
  );
}