import React from 'react';
import {bool, func} from 'prop-types';
import NavLink from '../NavLink';
import {DesktopNav} from './Navigation.styled';

 const Navigation = ({open, setOpen}) => {
  const links = [
    <li key={1}><NavLink to={'/about/'}>About</NavLink></li>,
    <li key={2}><NavLink to={'/contact/'}>Контакты</NavLink></li>
  ];

  return (
    <DesktopNav open={open}>
      <ul>
        {links}
      </ul>
    </DesktopNav>
  );
};

Navigation.propTypes = {
  open: bool.isRequired,
  setOpen: func
}

export default Navigation;
