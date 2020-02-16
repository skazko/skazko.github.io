import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet"
import DarkModeToggler from '../DarkModeToggler';
import Navigation from '../Navigation';
import Burger from '../Burger';
import { header, title, link } from './header.module.css';
import { graphql, Link, useStaticQuery } from 'gatsby';

const Header = ({path}) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  let websiteTheme;
  if (typeof window !== 'undefined') {
    websiteTheme = window.__theme;
  }
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(websiteTheme);

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => {
      setTheme(window.__theme);
    };
  }, []);

  function renderTitle() {
    if (path === '/') {
      return (
        <h1 className={title}>
          <Link className={link} to='/'>{data.site.siteMetadata.title}</Link>
        </h1>
      );
    } else {
      return (
        <h3 className={title}>
          <Link className={link} to='/'>{data.site.siteMetadata.title}</Link>
        </h3>
      );
    }

  }

  return (
    <header className={header}>
      <Helmet
        meta={[
          {
            name: 'theme-color',
            content: theme === 'light' ? '#fbfbfb' : '#222222',
          },
        ]}
      />
      <DarkModeToggler mode={theme}/>
      {renderTitle()}
      <Burger open={open} setOpen={setOpen}/>
      <Navigation open={open} setOpen={setOpen}/>
      <DarkModeToggler mode={theme} desktop />
    </header>
  );
};

export default Header;
