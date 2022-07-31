import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  & {
    @media (max-width: 1200px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 2;
  background: ${({ theme }) => theme.palette.secondary.dark};

  :before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.55;
    background: ${({ theme }) => theme.palette.secondary.main};
  }

  img {
    width: 50%;
    position: absolute;
    left: 15%;
    top: 15%;
  }

  span {
    font-family: 'Anton';
    font-size: 24px;
    color: ${({ theme }) => theme.palette.secondary.lighter};
    position: absolute;
    left: 15%;
    top: 30%;
  }

  & {
    @media (max-width: 1200px) {
      display: none;
    }
  }
`;

export const ContainerOperation = styled.section`
  width: 100%;
  height: 100vh;
  padding: 0% 5%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 1200px) {
    min-height: 100vh;
    padding: 10% 5%;
  }
`;

export const ActionContainer = styled.div`
  width: 65%;
  height: 100%;
  margin-top: 25px;

  & {
    @media (max-width: 620px) {
      width: 90%;
    }
  }

  form {
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    row-gap: 20px;
    text-align: center;
    margin-top: 34px;
    margin-bottom: 30px;

    .leftColumn {
      grid-column: 1;
    }

    .rightColumn {
      grid-column: 2;
    }

    .fullColumn {
      grid-column: 1 / -1;
    }

    @media (max-width: 530px) {
      grid-template-columns: 1fr;
      padding: 30px 0px;

      .leftColumn {
        grid-column: 1 / -1;
      }

      .rightColumn {
        grid-column: 1 / -1;
      }

      .fullColumn {
        grid-column: 1 / -1;
      }
    }

    p {
      font-size: 13px;
      margin: 5px 0;
      text-align: right;

      span {
        font-size: 13px;
        color: ${({ theme }) => theme.palette.primary.dark};
      }
    }

    span {
      font-size: 16px;
      margin: 5px 0;
      color: ${({ theme }) => theme.palette.secondary.main};
    }

    .buttons {
      width: 100%;
      display: flex;
      justify-content: space-between;

      & {
        @media (max-width: 620px) {
          flex-direction: column;
          row-gap: 25px;

          button {
            width: 100%;
            row-gap: 25px;
          }
        }
      }
    }

    .social-button {
      font-size: 12px;
      font-weight: bold;
      height: 50px;
    }

    .svg_icons {
      transform: scale(0.6);
    }
  }
`;

export const FormGroup = styled.div`
  width: 100%;
`;

export const TermsGroup = styled.div`
  margin: -20px 0;
  justify-self: start;
  cursor: pointer;
  font-size: 13px;
  display: flex;
  align-items: center;

  label {
    cursor: pointer;
    user-select: none;
  }
`;
