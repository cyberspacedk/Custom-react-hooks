import {useLayoutEffect} from 'react'


export const useScrollFreeze = ()=> {
  
  useLayoutEffect(()=> {
    // call when component mounts
    const body = document.body;
    const original = window.getComputedStyle(body).overflow;
    body.style.overflow = 'hidden';
  
    // call when component unmounts
    return ()=>{
      body.style.overflow = original
    }
  }, [])

}