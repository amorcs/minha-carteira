import React from 'react';
import logoImg from '../../assets/logo.svg';

import {
  Container,
  Header,
  LogoImg,
  Title,
  MenuContainer,
  MenuItemLink,
} from './styles';

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp
} from 'react-icons/md';

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoImg src={logoImg} alt="Logo Minha carteira" />
        <Title>Minha-Carteira</Title>
      </Header>
      <MenuContainer>
        <MenuItemLink>
          <MdDashboard />
          DashBoard
        </MenuItemLink>

        <MenuItemLink>
          <MdArrowDownward />
          Entrada
        </MenuItemLink>

        <MenuItemLink>
          <MdArrowUpward />
          Saída
        </MenuItemLink>

        <MenuItemLink>
          <MdExitToApp />
          Sair
        </MenuItemLink>

      </MenuContainer>
    </Container>
  )
}
export default Aside;