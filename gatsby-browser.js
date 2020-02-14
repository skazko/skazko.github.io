import './src/styles/fonts.css';
import './src/styles/normalize.css';
import React from 'react';
import ContextProvider from './context';

export const wrapRootElement = ({element}) => (
  <ContextProvider>
    {element}
  </ContextProvider>
);
