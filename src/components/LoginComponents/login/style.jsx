import styled from "styled-components";

export const StyledForm = styled.div`
  margin-top: -100px;

  form {
    background-color: #161d2f;
    border-radius: 10px;
    width: 75vw;
    max-width: 400px;
    padding: 24px;
    margin-top: 50px;
  }

  input {
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
    }

    h1 {
      font-size: 32px;
      font-weight: 300;
      letter-spacing: -0.5px;
      text-align: left;
      color: #ffffff;
    }
`;

export const Paragraph = styled.span`
  width: 100%;
  color: #ffffff;
  font-size: 15px;
  font-weight: 300;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: center;

  .nostyle {
    margin-left: 5px;
    text-decoration: none;
    color: #FC4747;
  }
`;
