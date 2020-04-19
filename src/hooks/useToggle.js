import {useState} from 'react'

export const useToggle = (initial) => {
  const [isToggled, setIsToggled] = useState(initial);

  const toggleHandler = ()=> setIsToggled(prev=>!prev);

  return {isToggled, toggleHandler}
}