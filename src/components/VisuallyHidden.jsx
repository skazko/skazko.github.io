import styled from 'styled-components';

const VisuallyHidden = styled.input`
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
  padding: 0;
  margin: 0;
  border: none;
  overflow: hidden;
`;

export default VisuallyHidden;