import {useState} from 'react'

export const  useIncrement = ({
  maxValue =100, minValue = 0, initial=0, step=1
}) => {
  const [value, setValue] = useState(initial);

  const incHandler = ()=> setValue(prev=>  prev + step > maxValue ? maxValue : prev+step);

  const decHandler = ()=> setValue(prev=>  prev - step < minValue ? minValue : prev-step);

  const reset = () => setValue(initial);

  return [value,{ incHandler, decHandler, reset}]
}