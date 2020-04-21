import React from 'react'
import { Card} from "../Elements";
import black from "../black.png";

import {useHover, useWindowWidth, useMeasure} from '../hooks';

export const Hover = () => {
  // get hovering state and event handlers
  const [isHovered, bind] = useHover(); 

  // get element bounds
  const [ref, bounds] = useMeasure(); 
  
  // get actual width
  const width = useWindowWidth(); 
  // can manage component rendering depending on width
  if(width < 500) return null;

  return (
    <div>
      <Card ref={ref} {...bind} style={{ background: isHovered ? "var(--red)" : "var(--black)" }}>
        <h3>Some card</h3>
        <img src={black} alt="pic"/>
      </Card>
    </div>
  )
}
 