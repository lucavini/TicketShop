// Components
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import SliderCard from '../SliderCard';

// Styles
import { BackButton, NextButton, SlideContainer } from './styles';

const AutoPlaySwipeableViews:any = autoPlay(SwipeableViews);

function Slider() {
  return (
    <SlideContainer>
      <NextButton>
        <KeyboardArrowRight fontSize='large' className='slideButton' />
      </NextButton>

      <AutoPlaySwipeableViews className='Swipeable' enableMouseEvents>
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
      </AutoPlaySwipeableViews>

      <BackButton>
        <KeyboardArrowLeft fontSize='large' className='slideButton' />
      </BackButton>
    </SlideContainer>
  );
}

export default Slider;
