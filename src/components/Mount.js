import React from 'react';
 
import {useToggle, useMount, useUnmount} from '../hooks'

export const Mount = () => {
  const {isToggled, toggleHandler} = useToggle();

  return (
    <div>
      <button onClick={toggleHandler}>Toggle</button>
      {isToggled && <UnMount /> }
    </div>
  )
}
 

export const UnMount = () => {
  
  useMount(()=> {
    console.log('I m mounted')
  })

  useUnmount(()=> {
    console.log('Im UNMOUNTED')
  });

  return (
    <div>
      Unmount me
    </div>
  )
}

