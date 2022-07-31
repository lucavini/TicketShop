import React from 'react';
import { Container } from './styles';

interface Params {
  title: string;
  subtitle: string;
}

function index({ title, subtitle }: Params) {
  return (
    <Container>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </Container>
  );
}

export default index;
