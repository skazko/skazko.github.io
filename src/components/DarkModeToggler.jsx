import React from 'react';
import styled from 'styled-components';
import VisuallyHidden from './VisuallyHidden';
import { IconMoon, IconSun } from './Icons';

const SwitchIcon = ({ checked }) => checked ? <IconSun /> : <IconMoon />;

const StyledLabel = styled.label`
  display: flex;
  padding: 0.25rem 1.125rem;

  &:hover {
    cursor: pointer
  }
  
  ${VisuallyHidden}:focus + * {
    outline: ${props => props.theme.accentColor} 2px dotted;
  } 
`;

const DarkModeToggler = ({ theme, setTheme }) => {
  return (
    <StyledLabel>
      <VisuallyHidden
        type='checkbox'
        onChange={(e) => {
          const newTheme = e.target.checked ? 'dark' : 'light';
          setTheme(newTheme);
          window.localStorage.setItem('theme', newTheme);
        }}
        checked={theme === 'dark'}
      />
      <SwitchIcon checked={theme === 'dark'} />
    </StyledLabel>
  );
}

export default DarkModeToggler;
