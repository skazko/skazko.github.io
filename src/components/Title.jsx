import styled from 'styled-components';
import { screen } from '../styles/media';

export const Title = styled.h1`
  display: block;
  margin: 0;
  text-decoration: none;
  color: #222222;
  font-size: 1.75rem;
  line-height: 1.2;
  font-weight: 500;
  margin-right: auto;
  text-align: center;

  @media ${screen.medium} {
    font-size: 1.5rem;
    margin-right: 0;
  }

  @media ${screen.small} {
    font-size: 1.25rem;
  }
`;

export const LinkTitle = styled(Title)`
  &:visited, &:hover, &:active, &:focus {
    outline: none;
  }

  &:visited {
    color: var(--text-color, #222222);
  }

  &:hover, &:active, &:focus {
    color: var(--accent-color, red);
  }
`;
