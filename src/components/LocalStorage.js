import React from 'react'

import { useLocalStorage } from '../hooks';

export const LocalStorage = () => {

  const [value, setValue] = useLocalStorage( 'test-key', 'i am initial' ); 

  const setStorageHandler = ({target: {value}})=>  setValue(value);
 
  return (
    <div>
     <h1>Local Storage</h1>
     {value}
     <input value={value} onChange={setStorageHandler}/>
    </div>
  )
}
