import React from 'react';

type InputProps = {};

const Input = React.forwardRef<React.HtmlHTMLAttributes<HTMLInputElement>, InputProps>(({}, ref) => {
  return <div>Input</div>;
});

export default Input;
