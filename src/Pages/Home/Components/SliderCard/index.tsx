// Components
import { PlaceOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';

// Styles
import { Card, Content, Description, ImageBox, Title } from './styles';

// Assets
import cover from '../../../../Assets/images/banner1.png';

function SliderCard() {
  return (
    <Card>
      <ImageBox>
        <img src={cover} alt="cover" />
      </ImageBox>

      <Content>
        <span className='caption date'>de: 06/08 até: 07/08 </span>
        <span className='caption location'>
          <PlaceOutlined className='icon' /> Rio de janeiro, RJ
        </span>

        <Title>whindersson nunes: Proparoxitona</Title>

        <Description>
          Whindersson Nunes Batista, mais conhecido como Whindersson Nunes é um
          comediante, youtuber, cantor, compositor e ator brasileiro, conheci...
        </Description>

        <Button variant='outlined'>ver mais</Button>
      </Content>
    </Card>
  );
}

export default SliderCard;
