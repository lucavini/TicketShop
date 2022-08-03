import { styled } from '@mui/material';

export const Container = styled('div')`
  width: 100%;
  margin-bottom: 60px;
  padding: 0px 5%;
`;

export const HeaderContainer = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Head = styled('div')`
  margin-top: 80px;
  width: 100%;
  display: grid;
  grid-template-columns: 700px auto;
  column-gap: 10px;

  @media (max-width: 1300px) {
    grid-template-columns: 700px auto;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 537px auto;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const PhotoCover = styled('div')`
  width: 637px;
  height: 425px;
  position: relative;
  border-radius: 5px;
  background: ${({ theme }) => theme.palette.secondary.light};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 1300px) {
    width: 537px;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 380px) {
    width: 95%;
    justify-self: center;
    align-self: center;
  }
`;

export const Info = styled('div')`
  display: flex;
  flex-direction: column;
  position: relative;

  @media(max-width: 1000px){
    margin-top: 20px;
  }
`;

export const Date = styled('span')`
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const Title = styled('span')`
  margin-top: 5px;
  font-weight: 400;
  font-size: 32px;
  margin-top: 20px;
  color: ${({ theme }) => theme.palette.secondary.dark};
`;

export const Description = styled('span')`
  margin-top: 5px;
  font-weight: 400;
  font-size: 18px;
  margin-top: 20px;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const Price = styled('span')`
  margin-top: 35px;
  font-weight: 500;
  font-size: 48px;
  margin-top: 20px;
  font-family: 'Anton';
  color: ${({ theme }) => theme.palette.secondary.dark};
`;
