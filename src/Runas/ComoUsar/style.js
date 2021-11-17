import styled from 'styled-components/native';

export const Title = styled.Text `
  color: #CAA92E;
  font-size: 40px;
  text-align: center;
  background-color: #011425;
  padding: 20px;
`;

export const Container = styled.ScrollView`
  width: 100%;
  height: 100%;
  background-color: #011425;
  padding: 5%
`;

export const ItemName = styled.Text`
  text-align: center;
  color: #CAA92E;
  lineHeight: 30px
  font-size: 25px;
`;

export const SubView = styled.View`
  width: 100%;
  height: 80%;
  margin-bottom: 20%;
  align-items: center;
  border: 2px #1BCCE5 solid;
  border-radius: 10px;
  padding: 2%
`;

export const ViewImage = styled.View`
  width: 100%;
  height: 90%;
  align-items: center;
`;