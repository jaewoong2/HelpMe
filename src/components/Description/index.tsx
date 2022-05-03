import { SerializedStyles } from '@emotion/react';
import React, { HtmlHTMLAttributes } from 'react';
import { Container } from './Description.styles';

type DescriptionProps = {
  css?: SerializedStyles;
} & HtmlHTMLAttributes<HTMLDivElement>;

const Description: React.FC<DescriptionProps> = ({ css }) => {
  return (
    <Container css={css}>
      <p>Description</p>
    </Container>
  );
};

export default Description;
