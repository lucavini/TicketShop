/* eslint-disable react/jsx-no-bind */
// Components
import React from 'react';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import SliderCard from '../SliderCard';

// Styles
import {
  BackButton,
  MobileStepper,
  NextButton,
  SlideContainer,
} from './styles';

const AutoPlaySwipeableViews: any = autoPlay(SwipeableViews);

function Slider() {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = 4;

  function handleStepChange(index: number) {
    setActiveStep(index);
  }

  function handleNext() {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  return (
    <SlideContainer>
      <NextButton onClick={handleNext} disabled={activeStep === maxSteps - 1}>
        <KeyboardArrowRight fontSize='large' className='slideButton' />
      </NextButton>

      <AutoPlaySwipeableViews
        className='Swipeable'
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
      </AutoPlaySwipeableViews>

      <MobileStepper
        steps={4}
        position='static'
        activeStep={activeStep}
        nextButton={null}
        backButton={null}
      />
      <BackButton onClick={handleBack} disabled={activeStep === 0}>
        <KeyboardArrowLeft fontSize='large' className='slideButton' />
      </BackButton>
    </SlideContainer>
  );
}

export default Slider;
