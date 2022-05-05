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
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 50px;

  ${({ css }) => css};

  @media screen and (max-width: 874px) {
    max-width: unset;
    max-height: unset;
    padding: unset;
    justify-content: unset;
    margin: unset;
    width: 100%;
    height: unset;

    .save-btn {
      margin-top: 20px;
      position: unset;
      width: calc(100% - 30px);
    }

    .description {
      width: calc(100% - 80px);
      overflow: hidden;
    }
  }
`;
