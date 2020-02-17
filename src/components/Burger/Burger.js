import React from 'react';
import {bool, func} from 'prop-types';
import { IconMenuDots, IconMenuClose } from '../Icons';
import { burger } from './burger.module.css';

const Burger = ({open, toggleMenu}) => {
  return (
    <button 
      className={burger} 
      open={open} 
      onClick={toggleMenu}
      type='button'
    >
      {open ? <IconMenuClose /> : <IconMenuDots />}
    </button>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  toggleMenu: func.isRequired
}

export default Burger;
