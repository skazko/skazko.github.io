import React from 'react';
import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import { screen } from '../styles/media';

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
  color: var(--text-color, #222222);
  text-decoration: none;

  @media ${screen.medium} {
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
    background-color: var(--accent-color, red);
    bottom: -0.5rem;
    left: 0;
    animation: ${linkActivate} 0.2s ease-in-out;
  }
`;

const StyledNavLink = styled(StyledNavItem)`
  &:visited {
    color: var(--text-color, #222222);
  }

  &:hover, &:active, &:focus {
    outline: none;
    color: var(--accent-color, red);
  }
`;

export default (props) => {
  const {children, ...restProps} = props;
  const isActive = props.to === window.location.pathname;
  if (isActive) {
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
