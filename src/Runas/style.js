import styled from 'styled-components/native';

export const Title = styled.Text`
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
`;

export const ContainerLoading = styled.View`
  width: 100%;
  height: 600px;
  justify-content: center;
  align-items: center;
  background-color: #011425;
`;

export const WrapScroll = styled.View`
  background: #011425;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
`;

export const WrapItem = styled.TouchableOpacity`
  padding: 10px;
  width: 90%;
  height: 75px;
  margin-bottom: 4%;
  align-items: center;
  border: 2px #1BCCE5 solid;
  border-radius: 10px;
`;

export const ItemImage = styled.Image`
  height: 40px;
  width: 40px;
  margin-left: 30px;
  margin-right: 15px;
`;

export const ViewNameItem = styled.View`
  width: 100%;
  height: 30%;
  justify-content: center;
  align-items: center;
`;

export const ViewImage = styled.View`
  width: 100%;
  height: 90%;
  
  align-items: center;
  flex-direction: row;
`;


export const ItemName = styled.Text`
  text-align: center;
  color: #CAA92E;
  margin-top: 5px;
  font-size: 25px;
`;

export const NomeRuna = styled.Text`
  text-align: center;
  color: #CAA92E;
  margin-top: 5px;
  font-size: 30px;
  margin-bottom: 20px;
`;
