import styled from 'styled-components';

const SButton = styled.button<{ $variant?: 'primary' | 'filter'; $active?: boolean }>`
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ $variant }) =>
    $variant === 'primary' &&
    `
      padding: 10px;
      border-radius: 10px;
      background-color: #007bff;
      color: #fff;
      border: none;

      &:hover {
        opacity: 0.8;
      }
    `}

  ${({ $variant, $active }) =>
    $variant === 'filter' &&
    `
      background: none;
      border: none;
      color: ${$active ? '#4d90fe' : '#777'};
      font-weight: ${$active ? 'bold' : 'normal'};

      &:hover {
        color: #4d90fe;
      }
    `}
`;

export { SButton };