import styled from 'styled-components/native';

export const Title = styled.Text`
  color: #CAA92E;
  font-size: 30px
  text-align: center;
  backgroundColor: #011425;
  padding: 20px
`;

export const Container = styled.ScrollView``;

export const WrapScroll = styled.View`
  flex: 1;
  background: #011425;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const WrapItem = styled.View`
  padding: 20px;
  width: 50%;
  justify-content: flex-start;
  align-items: center;
`;

export const ItemImage = styled.Image`
  height: 50px;
  width: 50px;
`;

export const ItemName = styled.Text`
  text-align: center;
  color: #CAA92E;
`;
