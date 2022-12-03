import styled from 'styled-components';

const Input = styled.input`
  height: 36px;
  border: 1px solid ${({ theme }) => theme.color.input.border.idle};
  background: ${({ theme }) => theme.color.input.background};
  box-sizing: border-box;
  color: white;
  padding: 0px 12px;
  width: 100%;
  border-radius: 4px;
  outline: none !important;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const InputWithSuffix = styled(Input)<{ suffix: string }>``;

export default Input;
