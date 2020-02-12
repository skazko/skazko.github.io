import React from 'react';
import {bool, func} from 'prop-types';
import { StyledBurger } from './Burger.styled';
import { IconMenuDots, IconMenuClose } from '../Icons';

const Burger = ({open, setOpen}) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <IconMenuDots hidden={open}/>
      <IconMenuClose hidden={!open}/>
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
}

export default Burger;
