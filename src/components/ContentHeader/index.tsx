import React from 'react';

import {
  Container,
  TitleContainer,
  Controller } from './styles';

const ContentHeader: React.FC = ({ children }) => {
  return (
    <Container>
      <TitleContainer>
        <h1>Título</h1>
      </TitleContainer>
      <Controller>
        <button type="button">BotãoA</button>
        <button type="button">BotãoB</button>
      </Controller>
    </Container>
  )
}
export default ContentHeader;