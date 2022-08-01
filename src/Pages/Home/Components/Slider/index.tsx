/* eslint-disable react/jsx-no-bind */
// Components
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { WeekEvent } from '../../../../Interfaces';
import SliderCard from '../SliderCard';

// Styles
import {
  BackButton,
  MobileStepper,
  NextButton,
  SlideContainer,
} from './styles';

const AutoPlaySwipeableViews: any = autoPlay(SwipeableViews);

type Props = {
  events: WeekEvent[];
};

function Slider({ events }: Props) {
  const maxSteps = events.length;
  const [activeStep, setActiveStep] = React.useState(0);

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
        {events.map((event, index) => (
          <SliderCard key={index} event={event} />
        ))}
      </AutoPlaySwipeableViews>

      <MobileStepper
        steps={maxSteps}
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
