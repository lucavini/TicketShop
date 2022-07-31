import styled from 'styled-components';

export const Container = styled.div`
  color: ${({ theme }) => theme.palette.secondary.dark};
  width: 500px;
  margin-top: -30px;

  @media (max-width: 650px) {
    & {
      width: 400px;
    }
  }

  @media (max-width: 560px) {
    & {
      width: 300px;
    }
  }

  h1 {
    font-weight: 400;
    font-size: 50px;
    position: relative;
  }

  h3 {
    max-width: 90%;
    font-weight: 400;
    font-size: 16px;
    margin-top: 1px;
  }
`;
