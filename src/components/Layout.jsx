import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import GlobalStyle from './GlobalStyle';
import Footer from './Footer';

const StyledLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.bgColor};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
`;

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <StyledLayout>
        <Header />
        <Footer />
      </StyledLayout>
    </>
  );
};

export default Layout;
