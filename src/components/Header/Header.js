import React from 'react';
import { Helmet } from "react-helmet"
import DarkModeToggler from '../DarkModeToggler';
import Navigation from '../Navigation';
import Burger from '../Burger';
import style from './header.module.css';
import { Link } from 'gatsby';

class Header extends React.Component {
  state = {
    theme: null,
    menuOpen: false
  }

  componentDidMount() {
    this.setState({theme: window.__theme});
    window.__onThemeChange = () => {
      this.setState({theme: window.__theme});
    };
  }

  toggleMenu = () => {
    const {setMenuOpen, menuOpen} = this.props;
    setMenuOpen(!menuOpen);
  }

  toggleDarkMode = () => {
    window.__setPreferredTheme(this.state.theme === 'dark' ? 'light' : 'dark');
  }

  renderTitle() {
    const { title, path } = this.props;
    if (path === '/') {
      return (
        <h1 className={style.title}>
          <Link className={style.link} to='/'>{title}</Link>
        </h1>
      );
    } else {
      return (
        <h3 className={style.title}>
          <Link className={style.link} to='/'>{title}</Link>
        </h3>
      );
    }
  }

  render() {
    const {
      state: {theme}, 
      toggleDarkMode, 
      toggleMenu, 
      props: {menuOpen}
    } = this;

    return (
      <header className={style.header}>
        <Helmet
          meta={[
            {
              name: 'theme-color',
              content: theme === 'light' ? '#fbfbfb' : '#222222',
            },
          ]}
        />
        <DarkModeToggler mode={theme} toggle={toggleDarkMode}/>
        {this.renderTitle()}
        <Burger open={menuOpen} toggleMenu={toggleMenu}/>
        <Navigation open={menuOpen} />
        <DarkModeToggler mode={theme} toggle={toggleDarkMode} desktop />
      </header>
    )
  }
}

export default Header;
