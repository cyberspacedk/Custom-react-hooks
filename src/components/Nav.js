import React from 'react';

import {useAppState} from '../state';

export const Nav = () => {

  const {isMenuOpen, toggleMenu} = useAppState();
  if(!isMenuOpen) return null;

  return (
    <nav style={{
      background: 'var(--black)', 
      color: 'white', 
      position: 'fixed', 
      width: '100vw', 
      height: '100vh',
      left: 0,
      right: 0      
      }}>
      <h1>Hello</h1>
      <button onClick={toggleMenu}>Close</button>
    </nav>
  )
}
