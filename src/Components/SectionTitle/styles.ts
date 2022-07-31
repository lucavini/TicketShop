import styled from 'styled-components';

export const Title = styled.h2`
  font-weight: 400;
  font-size: 28px;
  line-height: 35px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.palette.secondary.main};
`;
