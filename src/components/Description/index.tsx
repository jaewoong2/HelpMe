import { SerializedStyles } from '@emotion/react';
import React, { HtmlHTMLAttributes } from 'react';
import { Container, TextArea } from './Description.styles';

type DescriptionProps = {
  css?: SerializedStyles;
  value?: string;
} & HtmlHTMLAttributes<HTMLDivElement>;

const Description: React.FC<DescriptionProps> = ({ css, value, children }) => {
  return (
    <Container css={css}>
      {/* <TextArea placeholder="Description" value={value} readOnly={true}></TextArea> */}
      {children}
    </Container>
  );
};

export default Description;
