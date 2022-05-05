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

  @media screen and (max-width: 874px) {
    max-width: unset;
    max-height: unset;
    padding: unset;
    justify-content: unset;
    margin: unset;

    width: 80%;
    height: unset;
  }
`;
