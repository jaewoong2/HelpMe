import * as Styled from '@components/Button/Button.styles';
import { SerializedStyles } from '@emotion/react';
import React from 'react';

type ButtonProps = {
  children?: React.ReactNode | JSX.Element | React.ReactElement;
  css?: SerializedStyles;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ onClick, children, css, ...props }, ref) => {
  return (
    <Styled.Button onClick={onClick} ref={ref} css={css} {...props}>
      {children}
    </Styled.Button>
  );
});

export default Button;
