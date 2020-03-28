import React from 'react';
import {Link} from 'gatsby'
import {bool} from 'prop-types';
import nav from './navigation.module.css';

 const Navigation = ({open}) => {
  const menuItems = [
    {
      path: '/about/',
      key: 'about',
      title: 'Обо мне'
    },
    {
      path: '/contact/',
      key: 'contact',
      title: 'Контакты'
    },
  ];
  const links = menuItems.map((item) => (
    <li key={item.key} className={nav.item}>
      <Link 
        to={item.path}
        className={nav.link} 
        activeClassName={nav.activeLink}>
          {item.title}
        </Link>
    </li>
  ))

  return (
    <>
      <nav className={nav.menu}>
        <ul className={nav.list}>
          {links}
        </ul>
      </nav>
      <nav className={`${nav.mobileMenu} ${open ? nav.open : ''}`}>
        <ul className={nav.mobileList}>
          {links}
        </ul>
      </nav>
    </>
  );
};

Navigation.propTypes = {
  open: bool.isRequired,
}

export default Navigation;
