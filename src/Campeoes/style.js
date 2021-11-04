import styled from 'styled-components/native';

export const Title = styled.Text`
  color: #CAA92E;
  font-size: 40px
  text-align: center;
  backgroundColor: #011425;
  padding: 20px
`;

export const Container = styled.ScrollView`
  width: 100%
  height: 100%
  background-color: #011425
`;

export const ContainerLoading = styled.View`
  width: 100%
  height: 600px
  justify-content: center
  align-items: center
  background-color: #011425
`;

export const InputView = styled.View`
  width: 90%;
  height: 35px;
  background-color: #FFF;
  border-radius: 5px
  justify-content: center
  align-items: center
`;

export const Input = styled.TextInput`
  width: 95%
  height: 90%
`;

export const WrapScroll = styled.View`
  background: #011425;
  align-items: center
  padding: 10px
`;

export const WrapItem = styled.TouchableOpacity`
  padding: 10px;
  width: 80%;
  height: 200px;
  margin-bottom: 4%
  align-items: center;
  border: 2px #1BCCE5 solid
  border-radius: 10px
`;

export const ItemImage = styled.Image`
  height: 100px;
  width: 100px;
`;

export const ViewNameItem = styled.View`
  width: 100%
  height: 30%
  justify-content: center
  align-items: center
`;

export const ViewImage = styled.View`
  width: 100%
  height: 70%
  justify-content: center
  align-items: center
`;


export const ItemName = styled.Text`
  font-size: 15px
  text-align: center;
  color: #CAA92E;
  margin-bottom: 5px
`;

export const TitleName = styled.Text`
  font-size: 23px
  font-weight: bold;
  text-align: center;
  color: #CAA92E;
  margin-top: 5px
`;
