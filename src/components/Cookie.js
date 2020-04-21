import React from 'react'

import { useCookies } from '../hooks';

export const Cookie = () => {

  const [cookie, setStateCookie] = useCookies( 'test' ); 

  const setCookieHandler = ({target: {value}})=>  setStateCookie(value);
 
  return (
    <div>
     <h1>Cookie</h1>
     {cookie}
     <input value={cookie} onChange={setCookieHandler}/>
    </div>
  )
}
