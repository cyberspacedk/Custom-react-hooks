import {useState} from 'react';

// if form will have a lot of inputs, we can add additional argument "name" to hook 

export const useInputValue = (defaultValue='')=>{

  const [value, setValue] = useState(defaultValue);

  return {
  // declare attr fot input
    bind: {
      value, 
      onChange: ({target: {value}})=> setValue(value) 
    },
  // declare additional field
    value: ()=> value,
    clear: ()=> setValue('')
  } 
}