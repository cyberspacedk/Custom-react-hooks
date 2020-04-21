import React from 'react'

import {useTheme} from '../hooks';

export const Theme = () => {

  const  [theme, setTheme] = useTheme();
  const selectHandler = ({target:{value}}) => setTheme(value);

  return (
    <div>
      <span style={{marginRight: '15px'}}>Change theme color</span>
      <select name="theme" defaultValue={theme} onChange={selectHandler}>
        <option value="light">light</option>
        <option value="dark">dark</option> 
      </select>
    </div>
  )
}
 