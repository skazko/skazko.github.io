import styled from 'styled-components';
import { screens } from '../../styles/media';

export const HeaderMenuToggler = styled.div`
  display: none;
  @media ${screens.medium} {
    display: flex;
  }
`;
export const HeaderTitle = styled.div``;
export const HeaderNavigation = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  
  @media ${screens.medium} {
    display: none;
  }
`;
export const HeaderDarkModeToggler = styled.div`
  padding: 0.25rem 0 0.25rem 1.125rem;
  @media ${screens.medium} {
    padding: 0.25rem 1.125rem 0.25rem 0;
  }
`;

const StyledHeader = styled.header`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #cccccc;

  @media ${screens.medium} {
    padding: 1.5rem;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  @media ${screens.small} {
    padding: 0.375rem 1.125rem;
  }
`;

export default StyledHeader;
