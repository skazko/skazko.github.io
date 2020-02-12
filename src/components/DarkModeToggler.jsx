import React from 'react';
import styled from 'styled-components';
import {bool, string, func} from 'prop-types';
import VisuallyHidden from './VisuallyHidden';
import { IconMoon, IconSun } from './Icons';

const StyledLabel = styled.label`
  display: ${p => p.desktop ? 'flex' : 'none'};
  padding-left: ${p => p.desktop ? '1.125rem' : '0'};

  &:hover {
    cursor: pointer
  }
  
  ${VisuallyHidden}:focus + * {
    outline: ${props => props.theme.accentColor} 2px dotted;
  }

  @media ${({theme}) => theme.medium} {
    display: ${p => p.desktop ? 'none' : 'flex'};
  }
`;

const DarkModeToggler = ({ theme, setTheme, desktop }) => {
  return (
    <StyledLabel desktop={desktop}>
      <VisuallyHidden
        type='checkbox'
        onChange={(e) => {
          const newTheme = e.target.checked ? 'dark' : 'light';
          setTheme(newTheme);
          window.localStorage.setItem('theme', newTheme);
        }}
        checked={theme === 'dark'}
      />
      <IconSun hidden={theme !== 'dark'} />
      <IconMoon hidden={theme === 'dark'} />
    </StyledLabel>
  );
};

DarkModeToggler.propTypes = {
  theme: string.isRequired,
  setTheme: func.isRequired,
  desktop: bool
};

export default DarkModeToggler;
