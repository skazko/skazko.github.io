import styled from 'styled-components';

export const DesktopNav = styled.nav`
  @media ${({theme}) => theme.medium} {
    transform: ${({open}) => open ? 'translateY(0)' : 'translateY(-300px)'};
    opacity: ${({open}) => open ? 1 : 0};
    visibility: ${({open}) => open ? 'visible' : 'hidden'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 5;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({theme}) => theme.popupBgColor};
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
    backdrop-filter: blur(3px);
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;

    @media ${({theme}) => theme.medium} {
      flex-direction: column;
    }
  }

  li {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
  }
`;
