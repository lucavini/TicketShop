import { styled } from '@mui/material/';

export const SlideContainer = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  position: relative;

  .Swipeable {
    width: 1079px;
  }
`;

export const NextButton = styled('button')`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 100%;
  border: none;
  border-radius: 0px 10px 10px 0px;
  background: transparent;
  transition: ease-in 0.2s;

  .slideButton {
    fill: ${({ theme }) => theme.palette.secondary.main};
  }

  &:hover {
    .slideButton {
      fill: ${({ theme }) => theme.palette.primary.light};
      transform: scale(2);
    }
  }
`;

export const BackButton = styled('button')`
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 100%;
  border: none;
  border-radius: 10px 0px 0px 10px;
  background: transparent;
  transition: ease-in 0.3s;

  .slideButton {
    fill: ${({ theme }) => theme.palette.secondary.main};
  }

  &:hover {
    .slideButton {
      fill: ${({ theme }) => theme.palette.primary.light};
      transform: scale(2);
    }
  }
`;
