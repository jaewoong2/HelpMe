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
  user-select: none;
`;

const TextArea = styled.textarea`
  width: 100%;
  margin-top: 20px;
  height: calc(100% - 20px);
  outline: none;
  border: none;
  resize: none;
  background-color: transparent;
`;

export { Container, TextArea };
