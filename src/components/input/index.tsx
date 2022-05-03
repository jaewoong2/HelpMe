import * as Styled from '@components/Input/Input.styles';
import { SerializedStyles } from '@emotion/react';
import React from 'react';

type InputProps = {
  title?: string;
  children?: React.ReactNode | JSX.Element | React.ReactElement;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  css?: SerializedStyles;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ title, value, onChange, css }, ref) => {
  return (
    <Styled.Label css={css}>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Input value={value} onChange={onChange} ref={ref} />
    </Styled.Label>
  );
});

export default Input;
