import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

const Container = styled.div<{ css?: SerializedStyles }>`
  width: 100%;
  height: 100%;
  border-radius: 22px;
  background-color: ${({ theme }) => theme.color.textAreaBg};

  ${({ css }) => css};
`;

export { Container };
