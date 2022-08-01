import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

export const Nav = styled(AppBar)`
  width: 100%;
  height: 60px;
  padding: 0px 45px;
  background: ${({ theme }) => theme.palette.secondary.light};
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    width: 150px;
    height: 60px;
    fill: ${({ theme }) => theme.palette.primary.main};;
  }

  @media (max-width: 500px) {
    padding: 0px 20px;

    .logo {
      width: 150px;
      height: 74px;
    }
  }
`;
