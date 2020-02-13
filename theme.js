import { createContext } from "react"

const initialTheme = typeof window !== 'undefined' ? 
  (window.localStorage.theme || 'light') : 'light';

export const initialState = {
  theme: initialTheme,
};

export function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
      };
    default:
      return state;
  }
}

export const StateContext = createContext();
export const DispatchContext = createContext();
