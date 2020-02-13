import React, { useContext } from 'react';
import {bool} from 'prop-types';
import VisuallyHidden from '../VisuallyHidden';
import { IconMoon, IconSun } from '../Icons';
import { StateContext, DispatchContext } from '../../../theme';
import StyledLabel from './DarkModeToggler.styled';


const DarkModeToggler = ({ desktop }) => {
  const { theme } = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const toggleTheme = () => {
    dispatch({type: 'TOGGLE_THEME'});
  };

  const isDark = theme => theme === 'dark'; 

  return (
    <StyledLabel desktop={desktop}>
      <VisuallyHidden
        type='checkbox'
        onChange={toggleTheme}
        checked={isDark(theme)}
      />
      <IconSun hidden={!isDark(theme)} />
      <IconMoon hidden={isDark(theme)} />
    </StyledLabel>
  );
};

DarkModeToggler.propTypes = {
  desktop: bool
};

export default DarkModeToggler;
