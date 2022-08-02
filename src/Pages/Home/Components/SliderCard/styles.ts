import { Paper, styled } from '@mui/material/';

export const Card = styled(Paper)`
  width: 1079px;
  height: 374px;
  display: flex;
  background: #ffffff;
  border-radius: 10px;
  margin: 5px 0px;
  padding: 20px;

  @media (max-width: 1260px) {
    & {
      width: 950px;
    }
  }

  @media (max-width: 1120px) {
    & {
      width: 750px;
      height: 300px;
      padding: 10px 20px;
    }
  }
`;

export const ImageBox = styled('div')`
  width: 537px;
  height: 334px;
  border-radius: 10px;
  background: ${({ theme }) => theme.palette.secondary.main};
  overflow: hidden;

  img {
    width: 537px;
    height: 334px;
    object-fit: cover;
  }

  @media (max-width: 1120px) {
    & {
      width: 490px;
      height: 250px;

      img {
        width: 350px;
        height: 250px;

        object-fit: cover;
      }
    }
  }
`;

export const Content = styled('div')`
  display: flex;
  flex-direction: column;
  width: 537px;
  height: 334px;
  margin-left: 25px;
  position: relative;

  .caption {
    position: absolute;
    max-width: 200px;
    display: flex;
    align-items: center;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    color: ${({ theme }) => theme.palette.secondary.main};
  }

  .location {
    right: 0;

    .icon {
      width: 16px;
      height: 16px;
    }
  }

  button {
    margin-top: auto;
    margin-left: auto;
    width: 130px;
    height: 40px;
  }

  @media (max-width: 1120px) {
    & {
      width: 490px;
      height: 280px;
    }
  }
`;

export const Title = styled('span')`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  margin-top: 20px;
  color: ${({ theme }) => theme.palette.secondary.dark};
`;

export const Description = styled('span')`
  font-weight: 400;
  font-size: 16px;
  margin-top: 30px;
  line-height: 20px;
  color: ${({ theme }) => theme.palette.secondary.main};
`;
