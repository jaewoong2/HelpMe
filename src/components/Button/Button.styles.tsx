import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

const Button = styled.button<{ css?: SerializedStyles }>`
  font-size: 16px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 12px 2px;
  outline: none;
  color: ${({ theme }) => theme.color.addButonColor};
  ${({ css }) => css};
`;

export { Button };
