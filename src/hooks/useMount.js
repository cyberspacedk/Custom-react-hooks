/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react';

export const useMount = (cb) => {

  useEffect(()=> {
    cb()
  },[])
}


export const useUnmount = (cb) => {

  useEffect(()=> {
    return ()=> {
      cb()
    }
  },[])
}