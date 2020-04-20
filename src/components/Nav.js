import React from 'react';

import {useAppState} from '../state';
import {useScrollFreeze} from '../hooks';

// Wrapper need for handling freeze state
// when component Nav unmounts freeze is disbled 
export const NavWrapper = ()=> {
  const {isMenuOpen} = useAppState();
  if(!isMenuOpen) return null;
  return <Nav />
}

const Nav = () => { 
  const {toggleMenu} = useAppState();

  // call freeze scroll
  useScrollFreeze(); 

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
