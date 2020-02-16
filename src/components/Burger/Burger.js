import React from 'react';
import {bool, func} from 'prop-types';
import { IconMenuDots, IconMenuClose } from '../Icons';
import { burger } from './burger.module.css';

const Burger = ({open, setOpen}) => {
  return (
    <button 
      className={burger} 
      open={open} 
      onClick={() => setOpen(!open)}
      type='button'
    >
      {open ? <IconMenuClose /> : <IconMenuDots />}
    </button>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
}

export default Burger;
