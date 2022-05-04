import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import React, { HtmlHTMLAttributes } from 'react';

type RightSectionProps = {
  css?: SerializedStyles;
} & HtmlHTMLAttributes<HTMLDivElement>;

const RightSection: React.FC<RightSectionProps> = ({ children, css }) => {
  return <Section css={css}>{children}</Section>;
};

export default RightSection;

const Section = styled.section<{ css?: SerializedStyles }>`
  max-height: 960px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-left: 50px;

  ${({ css }) => css};
`;
