import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: relative;
  z-index: 10;
  display: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  color: ${props => props.theme.textColor};
  &:hover, &:active, &:focus {
    outline: none;
    color: ${props => props.theme.accentColor};
  }

  @media ${props => props.theme.medium} {
    display: flex;
  }
`;