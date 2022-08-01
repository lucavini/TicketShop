import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 800px;
  margin: 60px 0px 0px 40px;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 26px;
  line-height: 41px;
`;

export const SubTitle = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
`;

export const Content = styled.div`
  margin-top: 5px;
  width: 100%;
  height: 233px;
  background: #f6f6f6;
  border-radius: 5px;
  padding: 40px 16px 40px 60px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
`;

export const Options = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: column;
`;

export const ContentTitle = styled.h1`
  font-weight: 400;
  font-size: 24px;
  line-height: 38px;
  margin-bottom: 10px;
`;

export const Option = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  margin-bottom: 7px;
  display: flex;
  align-items: center;

  .icon {
    width: 21px;
    height: 21px;
    margin-right: 7px;
    fill: ${({ theme }) => theme.palette.primary.main};
  }
`;
