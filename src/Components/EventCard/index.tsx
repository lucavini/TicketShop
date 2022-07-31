import { PlaceOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Caption, Card, ImageBox, Title } from './styles';

import cover from '../../Assets/images/banner1.png';

function EventCard() {
  return (
    <Card>
      <ImageBox>
        <img src={cover} alt="cover" />
      </ImageBox>

      <Caption>de: 06/08 até: 07/08</Caption>
      <Title>whindersson nunes: Proparoxitona</Title>

      <Caption className='location'>
        <PlaceOutlined className='icon' /> Rio de janeiro, RJ
      </Caption>

      <Button variant='outlined'>ver mais</Button>
    </Card>
  );
}

export default EventCard;
