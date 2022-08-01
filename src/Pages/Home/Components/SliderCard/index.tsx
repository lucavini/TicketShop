// Components
import { PlaceOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import { WeekEvent } from '../../../../Interfaces';

// Styles
import { Card, Content, Description, ImageBox, Title } from './styles';

type Props = {
  event: WeekEvent;
};

function SliderCard({ event }: Props) {
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

        <Button variant='outlined'>ver mais</Button>
      </Content>
    </Card>
  );
}

export default SliderCard;
