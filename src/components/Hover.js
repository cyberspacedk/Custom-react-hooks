import React from 'react'
import { Card} from "../Elements";
import black from "../black.png";

import {useHover} from '../hooks';

export const Hover = () => {
  const [isHovered, bind] = useHover(); 
  
  return (
    <div>
      <Card {...bind} style={{ background: isHovered ? "var(--red)" : "var(--black)" }}>
        <h3>Some card</h3>
        <img src={black} />
      </Card>
    </div>
  )
}
