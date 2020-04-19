import React, {useState} from 'react'
import {useToggle} from '../hooks/useToggle'
export const Toggle = () => {

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = ()=> setIsToggled(prev=> !prev);
  const greet = useToggle();

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {isToggled && <p>To be toggled</p>} 
      {greet}
    </div>
  )
}
