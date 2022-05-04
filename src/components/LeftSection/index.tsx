import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import React, { HtmlHTMLAttributes } from 'react';

type LeftSectionProps = {
  css?: SerializedStyles;
} & HtmlHTMLAttributes<HTMLDivElement>;

const LeftSection: React.FC<LeftSectionProps> = ({ css, children }) => {
  return <Section css={css}>{children}</Section>;
};

export default LeftSection;

const Section = styled.section<{ css?: SerializedStyles }>`
  width: 50%;
  height: 100%;
  ${({ css }) => css};
`;
