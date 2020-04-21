import {useState, useEffect} from 'react'; 

export const useLocalStorage = ( key, initial ) => { 
  const item = localStorage.getItem(key);

  const [value, setValue] = useState(item || initial);
 

  useEffect(()=> {   
    localStorage.setItem(key, value)
  }, [value, key, initial]);

  return [value, setValue];
}