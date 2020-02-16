import React from 'react';
import {bool, string} from 'prop-types';
import { IconMoon, IconSun } from '../Icons';
import { button, mobileButton } from './style.module.css';

const DarkModeToggler = ({ desktop, mode }) => {

  return (
    <button 
      className={desktop ? button : mobileButton}
      type="button"
      onClick={() => {
        window.__setPreferredTheme(mode === 'light' ? 'dark' : 'light');
      }}
      style={{
        marginLeft: `${desktop ? '1.125rem' : '0'}`
      }}
    >
      {mode === 'dark' ? <IconSun /> : <IconMoon />}
    </button>
  );
};

DarkModeToggler.propTypes = {
  desktop: bool,
  mode: string
};

export default DarkModeToggler;
