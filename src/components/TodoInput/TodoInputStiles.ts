import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Input = styled.input`
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

const Button = styled.button`
  padding: 10px;
  border-radius: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export { InputContainer, Input, Button };