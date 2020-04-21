import React from 'react'
import {useIncrement} from '@hooks';

export const Increment = () => {
  const [value,{ incHandler, decHandler, reset}] = useIncrement({
    maxValue:100, minValue:0, initial: 0, step: 15
  });

  return (
    <div>
      <button onClick={decHandler}>-</button>
      <button onClick={incHandler}>+</button> 
      <button onClick={reset}>Reset</button>  
      {value}
    </div>
  )
}
