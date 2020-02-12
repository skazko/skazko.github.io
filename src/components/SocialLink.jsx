import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a.attrs(() => ({
  target: '_blank'
}))`
  display: flex;
  padding: 0 0.625rem;
  color: ${props => props.theme.textColor};

  &:visited {
    color: ${props => props.theme.textColor};
  }

  &:hover, &:active, &:focus {
    outline: none;
    color: ${props => props.theme.accentColor};
  }
`;

const SocialLink = ({children, ...props}) => (
  <StyledLink {...props}>
    {children}
  </StyledLink>
);

export default SocialLink;
