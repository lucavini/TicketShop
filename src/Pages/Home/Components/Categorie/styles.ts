import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
  cursor: pointer;

  &:hover {
    div,
    span {
      transition: all ease-in 0.2s;
      transform: scale(1.1);
    }

    span {
      margin-top: 3px;
      color: ${({ theme }) => theme.palette.secondary.dark};
    }
  }
`;

export const Frame = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100px;
  overflow: hidden;

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
  }
`;

export const Title = styled.span`
  font-family: 'Anton';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;
  color: ${({ theme }) => theme.palette.secondary.main};
`;
