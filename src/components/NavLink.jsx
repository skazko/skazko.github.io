import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';

const linkActivate = keyframes`
  from {
    left: 50%;
    width: 0;
  }

  to {
    left: 0;
    width: 100%;
  }
`;

const StyledNavItem = styled.span`
  position: relative;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 500;
  padding: 0.625rem 1.125rem;
  color: ${props => props.theme.textColor};
  text-decoration: none;

  @media ${({theme}) => theme.medium} {
    font-size: 2.5rem;
    line-height: 3rem;
    text-transform: uppercase;
  }
`;

const StyledNavItemActive = styled(StyledNavItem)`
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 5px;
    background-color: ${props => props.theme.accentColor};
    bottom: -0.5rem;
    left: 0;
    animation: ${linkActivate} 0.2s ease-in-out;
  }
  @media ${({theme}) => theme.medium} {
    color: ${props => props.theme.inverseColor};
    background-color: ${props => props.theme.inverseBg};
    &::after {
      content: none;
    }
  }
`;

const StyledNavLink = styled(StyledNavItem)`
  &:visited {
    color: ${props => props.theme.textColor};
  }

  &:hover, &:active, &:focus {
    outline: none;
    color: ${props => props.theme.accentColor};
  }
`;

export default (props) => {
  const {children, ...restProps} = props;
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(props.to === window.location.pathname)
  }, []);

  if (active) {
    return (
      <StyledNavItemActive>
        {children}
      </StyledNavItemActive>
    );
  } else {
    return (
      <StyledNavLink as={Link} {...restProps}>
        {children}
      </StyledNavLink>
    );
  }
};
