import { PlaceOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Caption, Card, ImageBox, Title } from './styles';

import { WeekEvent } from '../../Interfaces';

type Props = {
  event: WeekEvent;
};

function EventCard({ event }: Props) {
  const navigate = useNavigate();
  return (
    <Card>
      <ImageBox>
        <img src={event.cover} alt='cover' />
      </ImageBox>

      <Caption>{event.date}</Caption>
      <Title>{event.title}</Title>

      <Caption className='location'>
        <PlaceOutlined className='icon' /> {event.location}
      </Caption>

      <Button variant='outlined' onClick={() => navigate(`/event/${event.id}`)}>
        ver mais
      </Button>
    </Card>
  );
}

export default EventCard;
