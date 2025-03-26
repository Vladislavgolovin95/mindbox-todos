import styled from "styled-components";

const STodoListWrapper = styled.div`
  margin: 0 auto;
  max-height: 100vh;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const SList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

const SFooter = styled.div`
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

const SWrapperButtonsFilters = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export { STodoListWrapper, SList, SFooter, SWrapperButtonsFilters };