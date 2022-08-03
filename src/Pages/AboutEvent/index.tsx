import React from 'react';
import { useParams } from 'react-router-dom';

// Components
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Header from '../../Components/Header';
import HeaderChildren from '../../Components/HeaderChildren';
import { WeekEvent } from '../../Interfaces';
import { Api } from '../../Service/api';
import Loader from '../../Components/Loader';

// Styles
import { Container, Date, Description, Head, HeaderContainer, Info, PhotoCover, Price, Title } from './styles';

function AboutEvent() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [event, setEvent] = React.useState<WeekEvent>({} as WeekEvent);
  const { id } = useParams();

  React.useEffect(() => {
    async function getEventsDataById() {
      setIsLoading(true);

      try {
        const weekEventsResponse = await Api('getEventById/', id);
        setEvent(weekEventsResponse);
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    getEventsDataById();
  }, []);
  return (
    <Container>
      <Header>
        <HeaderChildren />
      </Header>
      {isLoading ? (
        <Loader isLoading={isLoading} text="Buscando informações do evento" />
      ) : (

        <HeaderContainer>
          <Head>
            <PhotoCover>
              <img src={event?.cover} alt="cover" />
            </PhotoCover>

            <Info>
              <IconButton sx={{ position: 'absolute', top: 0, right: 0 }} size='medium'>
                <ShareOutlinedIcon />
              </IconButton>

              <Date>{event?.date}</Date>

              <Title>{event?.title}</Title>

              <Description>
                {event?.description}
              </Description>

              <Price>R$ {event?.price}</Price>

              <Button
                sx={{ marginTop: '30px', height: '42px' }}
                variant='outlined'
              >
                Comprar ingresso
              </Button>
            </Info>
          </Head>
        </HeaderContainer>
      )}

    </Container>
  );
}

export default AboutEvent;
