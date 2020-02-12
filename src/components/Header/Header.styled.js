import styled from 'styled-components';

const StyledHeader = styled.header.attrs(() => ({
  id: 'header'
}))`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #cccccc;

  @media ${({theme}) => theme.medium} {
    padding: 1.5rem;
    justify-content: space-between;
  }

  @media ${({theme}) => theme.small} {
    padding: 0.375rem 1.125rem;
  }
`;

export default StyledHeader;
