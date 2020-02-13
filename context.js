import React, {useReducer, useEffect} from "react";
import {initialState, reducer, StateContext, DispatchContext} from './theme';
import { ThemeProvider } from 'styled-components';
import { themes } from './src/styles/themes';


const ContextProvider =  ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    window.localStorage.setItem('theme', state.theme);
  }, [state])

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <ThemeProvider theme={themes[state.theme]}>
          {children}
        </ThemeProvider>
      </DispatchContext.Provider>
    </StateContext.Provider>
  ); 
}

export default ContextProvider;
