// Components
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import Header from '../../Components/Header';
import HeaderChildren from '../../Components/HeaderChildren';

// Styles
import { Container, Date, Description, Head, HeaderContainer, Info, PhotoCover, Price, Title } from './styles';

function AboutEvent() {
  return (
    <Container>
      <Header>
        <HeaderChildren />
      </Header>

      <HeaderContainer>
        <Head>
          <PhotoCover />

          <Info>
            <IconButton sx={{ position: 'absolute', top: 0, right: 0 }} size='medium'>
              <ShareOutlinedIcon />
            </IconButton>

            <Date>de: 06/08 até: 07/08</Date>

            <Title>whindersson nunes: Proparoxitona</Title>

            <Description>
              Whindersson Nunes Batista, mais conhecido como Whindersson Nunes é
              um comediante, youtuber, cantor, compositor e ator brasileiro,
              conheci...
            </Description>

            <Price>R$ 90,99</Price>

            <Button
              sx={{ marginTop: '30px', height: '42px' }}
              variant='outlined'
            >
              Comprar ingresso
            </Button>
          </Info>
        </Head>
      </HeaderContainer>
    </Container>
  );
}

export default AboutEvent;
