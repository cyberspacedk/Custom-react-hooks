import React, {createContext, useContext} from 'react'
import {useToggle} from '../hooks'

// Create ctx
export const AppContext = createContext({ isMenuOpen: false})

// Get ctx
export const useAppState = () => useContext(AppContext);

// Create Provider
export const PageProvider = ({children}) => {
  
  const {isToggled, toggleHandler} = useToggle(false);

  return (
    <AppContext.Provider value={{
      isMenuOpen: isToggled, 
      toggleMenu: toggleHandler
    }}>
      {children}
    </AppContext.Provider>
  )
}
