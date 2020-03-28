import React from 'react';
import {bool, func, string} from 'prop-types';
import { IconMoon, IconSun, Empty } from '../Icons';
import { button, mobileButton } from './style.module.css';

const DarkModeToggler = ({ desktop, mode, toggle }) => {

  function renderIcon() {
    switch (mode) {
      case 'light':
        return <IconMoon />;
      case 'dark': 
        return <IconSun />;
      default:
        return <Empty />
    }
  }

  return (
    <button 
      className={desktop ? button : mobileButton}
      type="button"
      onClick={toggle}
      style={{
        marginLeft: `${desktop ? '1.125rem' : '0'}`
      }}
    >
      {renderIcon()}
    </button>
  );
};

DarkModeToggler.propTypes = {
  desktop: bool,
  mode: string,
  toggle: func.isRequired
};

export default DarkModeToggler;
