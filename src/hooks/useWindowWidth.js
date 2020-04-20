import {useState, useEffect} from 'react';

export const useWindowWidth = () => {

  const initialWidth = window.innerWidth;
  const [width, setWidth] = useState(initialWidth) 

  useEffect(()=> {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize);

    return ()=> {
      window.removeEventListener('resize', handleResize)
    }
  })

  return width;
}