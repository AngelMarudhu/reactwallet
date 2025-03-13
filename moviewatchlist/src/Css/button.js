import styled from "@emotion/styled";

const StyledButton = styled.button`
  background-color: #000;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  transition: all 0.5s ease-in-out;
  padding: 10px 20px;
  margin-top: 20px;

  &:hover {
    background-color: darkcyan;
    color: #000;
  }
`;

export { StyledButton };
