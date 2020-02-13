import styled from 'styled-components';
import VisuallyHidden from '../VisuallyHidden';

const StyledLabel = styled.label`
  display: ${({desktop}) => desktop ? 'flex' : 'none'};
  padding-left: ${({desktop}) => desktop ? '1.125rem' : '0'};

  &:hover {
    cursor: pointer
  }
  
  ${VisuallyHidden}:focus ~ svg {
    outline: ${({theme}) => theme.accentColor} 2px dotted;
  }

  ${VisuallyHidden}:active ~ svg {
    outline: ${({theme}) => theme.accentColor} 4px dotted;
  }

  @media ${({theme}) => theme.medium} {
    display: ${({desktop}) => desktop ? 'none' : 'flex'};
  }
`;

export default StyledLabel;
