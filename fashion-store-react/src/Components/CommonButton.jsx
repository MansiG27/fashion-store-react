

import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  background: #01000c;
  color: #FF3E6C;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover {
    background: #FF3E6C;
    color: #01000c;
  }
  

`;

export default function CommonButton({children, ...props}) {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  )
}
CommonButton.propTypes = {
  children: PropTypes.node.isRequired,
};
      