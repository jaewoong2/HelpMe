import * as Styled from '@components/Title/Title.styles';
import { SerializedStyles } from '@emotion/react';
import React from 'react';

type TitleProps = {
  children?: React.ReactNode | JSX.Element | React.ReactElement;
  css?: SerializedStyles;
};

const Title = React.forwardRef<HTMLInputElement, TitleProps>(({ children, css }, ref) => {
  return <Styled.Title css={css}>{children}</Styled.Title>;
});

export default Title;
