import React, { useMemo } from 'react';

import { Container, Content } from './styles';

const Footer: React.FC = () => {
  const year = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  return (
    <Container>
      <Content>
        <span>Master Burger</span>
        <span>&copy;{year}</span>
      </Content>
    </Container>
  );
};

export default Footer;
