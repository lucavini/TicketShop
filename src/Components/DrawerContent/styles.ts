import { styled } from '@mui/material/styles';

export const Container = styled('div')`
  width: 335px;
  height: 100%;
  padding: 15px 16px;
  background: #f6f7f9;
  display: flex;
  flex-direction: column;
`;

export const Head = styled('header')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .close {
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Title = styled('h4')`
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  color: ${({ theme }) => theme.palette.secondary.dark};
`;

export const UserContainer = styled('div')`
  width: 100%;
  height: 86px;
  margin-top: 12px;
  padding-left: 25px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background: #ffffff;

  display: flex;
  align-items: center;

  span {
    font-weight: 400;
    font-size: 20px;
    line-height: 31px;
    margin-left: 15px;
    color: ${({ theme }) => theme.palette.secondary.dark};
  }
`;

export const MenuContainer = styled('div')`
  width: 100%;
  height: 100%;
  margin-top: 25px;
  display: flex;
  flex-direction: column;

  span,
  p {
    font-weight: 500;
    font-size: 11px;
    line-height: 17px;
    color: ${({ theme }) => theme.palette.secondary.main};
  }

  .rodape {
    width: 100%;
    margin-top: auto;
    text-align: center;
  }
`;

export const Menu = styled('ul')`
  width: 100%;
  margin-top: 10px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 21px 25px;

  .item + .item {
    margin-top: 20px;
  }

  .item {
    display: flex;
    position: relative;
    padding: 10px 0px;
    border-bottom: 2px solid ${({ theme }) => theme.palette.secondary.lighter};

    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: ${({ theme }) => theme.palette.secondary.main};

    &:hover {
      transition: 0.2s;
      color: ${({ theme }) => theme.palette.secondary.dark};
      border-bottom: 2px solid ${({ theme }) => theme.palette.secondary.dark};
    }

    .arrow {
      position: absolute;
      top: 12px;
      right: 0;
    }
  }
`;
