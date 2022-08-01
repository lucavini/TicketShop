import React from 'react';

// components
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import Avatar from '@mui/material/Avatar';
import Header from '../../Components/Header';
import HeaderChildren from '../../Components/HeaderChildren';

// styles
import {
  Container,
  Content,
  ContentTitle,
  Option,
  Options,
  SubTitle,
  Title,
  Wrapper,
} from './styles';
import { useAuth } from '../../Context/AuthContext';

function MyAccount() {
  const { user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderChildren />
      </Header>

      <Wrapper>
        <Title>Dados pessoais</Title>
        <SubTitle>
          Edite suas informações pessoais: nome, e-mail, senha.
        </SubTitle>

        <Content>
          <Avatar src='' sx={{ width: 100, height: 100 }} />

          <Options>
            <ContentTitle>Bem-vindo, {`${user?.name} ${user?.surname}`}</ContentTitle>

            <Option>
              <EmailOutlinedIcon className='icon' />
              {user?.email}
            </Option>

            <Option>
              <LocalPhoneIcon className='icon' />
              {user?.phone}
            </Option>
          </Options>
        </Content>
      </Wrapper>

      <Wrapper>
        <Title>Suporte</Title>
        <SubTitle>
          Dúvidas? Mande uma mensagem em nossos canais de atendimento, logo
          entraremos em contato
        </SubTitle>

        <Content>
          <SupportAgentOutlinedIcon
            sx={{ width: 100, height: 100, fill: '#BDBDBD' }}
          />

          <Options>
            <ContentTitle>Atendimento ao usuário</ContentTitle>

            <Option>
              <LockOutlinedIcon className='icon' />
              Recuperar senha
            </Option>

            <Option>
              <ChatOutlinedIcon className='icon' />
              Chat instantâneo de atendimento
            </Option>

            <Option>
              <LocalPhoneIcon className='icon' /> Fale com um atendente
            </Option>

            <Option>
              <FlagOutlinedIcon className='icon' /> Denunciar
            </Option>
          </Options>
        </Content>
      </Wrapper>
    </Container>
  );
}

export default MyAccount;
