import styled from 'styled-components';

export const Title = styled.h1`
  color: ${({theme}) => theme.textColor};
  display: block;
  margin: 0;
  text-decoration: none;
  font-size: 1.75rem;
  line-height: 1.2;
  font-weight: 500;
  margin-right: auto;
  text-align: center;

  @media ${({theme}) => theme.medium} {
    font-size: 1.5rem;
    margin-right: 0;
  }

  @media ${({theme}) => theme.small} {
    font-size: 1.25rem;
  }
`;

export const LinkTitle = styled(Title)`
  &:visited, &:hover, &:active, &:focus {
    outline: none;
  }

  &:visited {
    color: ${({theme}) => theme.textColor};
  }

  &:hover, &:active, &:focus {
    color: ${({theme}) => theme.accentColor};
  }
`;
