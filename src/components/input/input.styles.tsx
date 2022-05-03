import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

const Label = styled.label<{ css?: SerializedStyles }>`
  width: 100%;
  height: 100%;
  ${({ css }) => css};
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.color.inputBg};
  border-radius: 9px;
  min-height: 45px;
  font-size: 16px;
  padding-left: 10px;
  margin-top: 5px;
`;

const Title = styled.p`
  margin: 2px 5px;
  font-size: 16px;
  font-weight: 800;
`;

export { Label, Input, Title };
