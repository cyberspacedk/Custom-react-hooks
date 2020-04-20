import React from 'react'
import {useToggle} from '../hooks';

export const Toggle = () => {

  const {isToggled, toggleHandler} = useToggle(false); 

  return (
    <div>
      <button onClick={toggleHandler}>Toggle</button>
      {isToggled && <p>To be toggled</p>}  
    </div>
  )
}
