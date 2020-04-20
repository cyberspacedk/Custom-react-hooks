import {useState, useRef, useEffect} from 'react';

const initialBounds = {
  left: 0,
  top: 0,
  width: 0,
  height: 0
}

export const useMeasure = () => {

  const ref = useRef();
  
  const [bounds, setBounds] = useState(initialBounds);

  const [resizeObserver] = useState(()=> {
   return new ResizeObserver(([entry])=> setBounds(entry.contentRect))
  })

  useEffect(()=> {
    if(ref.current){
      resizeObserver.observe(ref.current)
    }

    return ()=> {
      return resizeObserver.disconnect()
    }
  }, [resizeObserver])

  return [ref, bounds]
}