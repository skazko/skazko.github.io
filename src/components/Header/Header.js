import React, { useState } from 'react';
import {string, func} from 'prop-types';
import SiteTitle from '../SiteTitle';
import DarkModeToggler from '../DarkModeToggler';
import Navigation from '../Navigation';
import StyledHeader from './Header.styled';
import Burger from '../Burger';

const Header = ({ theme, setTheme }) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledHeader>
      <DarkModeToggler 
        theme={theme} 
        setTheme={setTheme}
      />
      <SiteTitle />
      <Burger open={open} setOpen={setOpen}/>
      <Navigation open={open} setOpen={setOpen}/>
      <DarkModeToggler 
        theme={theme} 
        setTheme={setTheme}
        desktop
      />
    </StyledHeader>
  );
};

Header.propTypes = {
  theme: string.isRequired,
  setTheme: func.isRequired
}

export default Header;
