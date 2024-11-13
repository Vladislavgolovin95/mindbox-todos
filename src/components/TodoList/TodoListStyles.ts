import styled from "styled-components";

const TodoListWrapper = styled.div`
  margin: 0 auto;
  max-height: 100vh;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  font-size: 14px;
  color: #777;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 15px;
    font-size: 12px;
    padding-top: 15px;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const Button = styled.button<{ $active?: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ $active }) => ($active ? '#4d90fe' : '#777')};
  font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};
  
  &:hover {
    color: #4d90fe;
  }
`;

export { TodoListWrapper, List, Footer, FilterButtons, Button };