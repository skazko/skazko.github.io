import React, {useState} from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Header from './Header';
import GlobalStyle from './GlobalStyle';
import Footer from './Footer';
import { themes } from '../styles/themes';

const StyledLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Layout = () => {
  const currentTheme = window.localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(currentTheme);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <StyledLayout>
        <Header setTheme={setTheme} theme={theme} />
        <Footer />
      </StyledLayout>
    </ThemeProvider> 
  );
};

export default Layout;
