import React from 'react'

import { useLocalStorage, useInputValue } from '@hooks';

export const LocalStorage = () => {

  const [value, setValue] = useLocalStorage( 'test-key', 'i am initial' ); 
  const input = useInputValue() 

  const setStorageHandler = ({target: {value}})=>  setValue(value);
 
  return (
    <div>
     <h1>Local Storage</h1>
     {value}
     <input value={value} onChange={setStorageHandler}/>

     <br />
     <br />
     <br />

    {/* useInputValue hook */}
    <h3>useInputValue</h3>
    <input {...input.bind}/> 


    </div>
  )
}
