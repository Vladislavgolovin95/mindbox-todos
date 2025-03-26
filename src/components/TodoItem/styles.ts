import styled from "styled-components";

const SItem = styled.li<{ $completed: boolean }>`
  display: flex;
  align-items: center;
  padding: 15px;
  font-size: 24px;
  color: ${({ $completed }) => ($completed ? '#d9d9d9' : '#4d4d4d')};
  text-decoration: ${({ $completed }) => ($completed ? 'line-through' : 'none')};
  border-bottom: 1px solid #ededed;

  @media (max-width: 600px) {
    font-size: 20px;
    padding: 12px;
  }
`;

const SCheckbox = styled.input`
  margin-right: 20px;
  width: 24px;
  height: 24px;
  border: 2px solid #4d4d4d;
  border-radius: 50%;
  cursor: pointer;
  appearance: none;
  outline: none;
  position: relative;

  &:checked {
    background-color: #4d4d4d;
  }

  &:checked::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 6px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  &:hover {
    border-color: #333;
  }

  @media (max-width: 600px) {
    width: 20px;
    height: 20px;
    margin-right: 15px;

    &:checked::before {
    top: 0;
    left: 4px;
  }
  }
`;

const STitle = styled.p`
  flex: 1;
  margin: 0;
`;

export { SItem, SCheckbox, STitle };