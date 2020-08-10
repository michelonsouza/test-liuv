import React from 'react';

import { Container } from './styles';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'success' | 'warning';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  ...rest
}) => {
  return (
    <Container variant={variant} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
