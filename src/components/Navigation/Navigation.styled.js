import styled from 'styled-components';
import { screens } from '../../styles/media';

const NavigationStyled = styled.nav`
  @media ${screens.medium} {
    display: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;

    @media ${screens.medium} {
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

export default NavigationStyled;
