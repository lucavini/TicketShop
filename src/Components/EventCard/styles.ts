import { Paper, styled } from '@mui/material';

export const Card = styled(Paper)`
  width: 280px;
  height: 300px;
  display: flex;
  flex-direction: column;
  padding: 7px 10px;
  transition: all ease-in-out 0.1s;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }

  button {
    position: absolute;
    right: 10px;
    bottom: 7px;
    width: 100px;
    height: 30px;
    font-size: 10px;
  }
`;

export const ImageBox = styled('div')`
  width: 260px;
  height: 140px;
  border-radius: 5px 5px 0px 0px;
  background: #d9d9d9;
  overflow: hidden;

  img {
    width: 260px;
    height: 140px;
    object-fit: cover;
  }
`;

export const Caption = styled('span')`
  margin-top: 10px;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  align-items: center;

  &.location {
    margin-top: auto;
  }

  .icon {
    width: 14px;
    height: 14px;
  }
`;

export const Title = styled('span')`
  margin-top: 5px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.palette.secondary.dark};
`;
