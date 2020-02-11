import styled from 'styled-components';
import { screens } from '../styles/media';

export const Title = styled.h1`
  display: block;
  margin: 0;
  text-decoration: none;
  font-size: 1.75rem;
  line-height: 1.2;
  font-weight: 500;
  margin-right: auto;
  text-align: center;

  @media ${screens.medium} {
    font-size: 1.5rem;
    margin-right: 0;
  }

  @media ${screens.small} {
    font-size: 1.25rem;
  }
`;

export const LinkTitle = styled(Title)`
  &:visited, &:hover, &:active, &:focus {
    outline: none;
  }

  &:visited {
    color: ${props => props.theme.textColor};
  }

  &:hover, &:active, &:focus {
    color: ${props => props.theme.accentColor};
  }
`;
