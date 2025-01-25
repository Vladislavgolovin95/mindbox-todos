import styled from "styled-components";

const SForm = styled.form`
  display: flex;
  margin-bottom: 20px;
`;

const SInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 20px;
  border: none;
  border-bottom: 1px solid #4d4d4d;
  color: #4d4d4d;
  outline: none;
  font-style: italic;
  background-color: #f7f7f7;
  

  @media (max-width: 600px) {
    font-size: 18px;
    padding: 12px;
  }
`;

export { SForm, SInput,  };