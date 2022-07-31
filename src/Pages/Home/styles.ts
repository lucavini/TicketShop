import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 0px 5%;
  padding-top: 60px;
  margin-bottom: 60px;
`;

export const Section = styled.section`
  width: 100%;
  margin-top: 40px;
`;

export const Categories = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const EventResults = styled.div`
  width: 100%;
  margin-top: 40px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, auto));
  column-gap: 20px;
  row-gap: 30px;
  justify-content: space-around;
`;
