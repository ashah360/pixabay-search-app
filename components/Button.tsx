import styled, { css } from 'styled-components';

export const Button = styled.button<{ w100?: boolean }>`
  border-radius: 4px;
  height: 36px;
  min-height: 36px;
  padding: 0px 16px 0px 12px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 150ms ease-out 0s;
  white-space: nowrap;
  background: white;
  color: black;
  border: none;
  outline: none !important;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  ${({ w100 }) =>
    w100 &&
    css`
      width: 100%;
    `}
`;
