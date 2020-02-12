import React, {useState, useEffect} from 'react';
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
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.bgColor};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
`;

const Layout = () => {
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    const currentTheme = window.localStorage.getItem('theme');
    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, [])

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
