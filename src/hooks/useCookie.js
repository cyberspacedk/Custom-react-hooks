import {useState, useEffect} from 'react';

import Cookies from 'js-cookie'; 

export const useCookies = ( key ) => {
  const initialCookie = Cookies.get(key);
  const [cookie, setStateCookie] = useState(initialCookie);
 

  useEffect(()=> {
    Cookies.set(key, cookie)
  }, [cookie, key]);

  return [cookie, setStateCookie];
}