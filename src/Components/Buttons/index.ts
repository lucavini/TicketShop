import { LoadingButton } from '@mui/lab';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PrimaryButton = styled(LoadingButton)`
  width: 172px;
  height: 55px;
  font-family: 'Saira', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.secondary.lighter};

  background: ${({ theme }) => theme.palette.primary.dark};
  box-sizing: border-box;
  border-radius: 10px;

  &:hover {
    background: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const SecondaryButton = styled(Button)`
  width: 172px;
  height: 55px;
  font-family: 'Saira', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.secondary.dark};
  
  background: ${({ theme }) => theme.palette.secondary.light};
  box-sizing: border-box;
  border-radius: 10px;

  &:hover {
    background: ${({ theme }) => theme.palette.secondary.lighter};
  }
`;
