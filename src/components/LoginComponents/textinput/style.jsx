import styled from "styled-components";

export const Input = styled.input`
  width: 90%;
  background: none;
  border: none;
  color: #ffffff;
  border-bottom: 1px solid ${({ error }) => (error ? "#FC4747" : "#5A698F")};
  height: 37px;
  font-size: 15px;
  margin-bottom: 28px;
  padding: 0 15px;
  outline: none;
  caret-color: #fc4747;

  &:focus {
    ${({ error }) => (error ? "#FC4747" : "#FFFFFF")};
  }
  &::placeholder {
    color: ${({ error }) => (error ? "#FC4747" : "#5A698F")};
    opacity: 0.8;
  }
`;

export const Label = styled.label``;

export const InputContainer = styled.div`
  width: 100%;
`;
