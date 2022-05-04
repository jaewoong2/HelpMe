import * as Styled from '@components/Title/Title.styles';
import { SerializedStyles } from '@emotion/react';
import React from 'react';

type TitleProps = {
  children?: React.ReactNode | JSX.Element | React.ReactElement;
  css?: SerializedStyles;
  dividerColor?: 'primary' | 'warning' | 'normal';
};

const Title = React.forwardRef<HTMLInputElement, TitleProps>(({ children, dividerColor, css }, ref) => {
  return (
    <Styled.Title dividerColor={dividerColor ?? 'primary'} ref={ref} css={css}>
      {children}
    </Styled.Title>
  );
});

export default Title;
