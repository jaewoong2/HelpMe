import { SerializedStyles } from '@emotion/react';
import React, { HtmlHTMLAttributes } from 'react';
import { Container, TextArea } from './Description.styles';

type DescriptionProps = {
  css?: SerializedStyles;
  value?: string;
} & HtmlHTMLAttributes<HTMLDivElement>;

const Description: React.FC<DescriptionProps> = ({ css, value, children, ...props }) => {
  return (
    <Container {...props} css={css}>
      {children}
    </Container>
  );
};

export default Description;
