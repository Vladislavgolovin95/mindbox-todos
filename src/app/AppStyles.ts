import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  margin: 50px auto;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  font-family: 'Arial', sans-serif;

  @media (max-width: 600px) {
    max-width: 90%;
    margin: 20px auto;
    padding: 15px;
  }
`;