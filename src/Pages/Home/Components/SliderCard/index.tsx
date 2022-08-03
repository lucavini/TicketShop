// Components
import { useNavigate } from 'react-router-dom';
import { PlaceOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import { WeekEvent } from '../../../../Interfaces';

// Styles
import { Card, Content, Description, ImageBox, Title } from './styles';

type Props = {
  event: WeekEvent;
};

function SliderCard({ event }: Props) {
  const navigate = useNavigate();
  return (
    <Card>
      <ImageBox>
        <img src={event.cover} alt="cover" />
      </ImageBox>

      <Content>
        <span className='caption date'>{event.date}</span>
        <span className='caption location'>
          <PlaceOutlined className='icon' /> {event.location}
        </span>

        <Title>{event.title}</Title>

        <Description>
          {event.description}
        </Description>

        <Button variant='outlined' onClick={() => navigate(`/event/${event.id}`)}>ver mais</Button>
      </Content>
    </Card>
  );
}

export default SliderCard;
