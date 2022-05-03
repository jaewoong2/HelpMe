import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { TypoGraphy } from '@styles/typo';

const Container = styled.div<{ css?: SerializedStyles }>`
  width: 100%;
  height: 100%;
  border-radius: 22px;
  background-color: ${({ theme }) => theme.color.textAreaBg};
  padding: 10px 25px;
  ${TypoGraphy.Description};
  ${({ css }) => css};
`;

export { Container };
