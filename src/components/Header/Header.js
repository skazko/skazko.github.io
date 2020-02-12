import React from 'react';
import SiteTitle from '../SiteTitle';
import DarkModeToggler from '../DarkModeToggler';
import Navigation from '../Navigation';
import StyledHeader, {
  HeaderDarkModeToggler,
  HeaderMenuToggler,
  HeaderNavigation,
  HeaderTitle
} from './Header.styled';


 const Header = ({ theme, setTheme }) => (
  <StyledHeader>
    <HeaderMenuToggler>

    </HeaderMenuToggler>
    <HeaderTitle>
      <SiteTitle />
    </HeaderTitle>
    <HeaderNavigation>
      <Navigation />
    </HeaderNavigation>
    <HeaderDarkModeToggler>
      <DarkModeToggler theme={theme} setTheme={setTheme} />
    </HeaderDarkModeToggler>
    
  </StyledHeader>
);

export default Header;
