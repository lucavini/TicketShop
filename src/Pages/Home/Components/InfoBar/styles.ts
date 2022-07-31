import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  height: 54px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchInfo = styled.div`
  width: 350px;

  p {
    font-size: 22px;
    font-weight: 500;
  }
  span {
    font-size: 14px;
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

export const SearchControlers = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;

  div {
    width: 76px;
    display: flex;
    justify-content: space-between;
    margin-right: 30px;

    .grid {
        fill: ${({ theme }) => theme.palette.primary.main}
      }
      .list {
        fill: ${({ theme }) => theme.palette.secondary.main}
      }
  }
`;
