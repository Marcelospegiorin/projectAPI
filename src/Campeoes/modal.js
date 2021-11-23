import styled from 'styled-components/native';

export const Modal = styled.Modal`
`;

export const ModalContent = styled.View`
    flex: 1
    align-items: center
    justify-content: center
    padding: 10px
    background-color: #011425
`;

export const ContainerModal = styled.View`
    border-radius: 10px
    padding: 10px 10px 20px 10px
    width: 100%
    height: 94%
    align-items: center
`;

export const SkinWrapper = styled.View`
    width: 320px;
    height: 360px
    margin-bottom: 15px
    justify-content: center
    border: 2px #1BCCE5 solid
    padding: 20px
    border-radius: 10px
`;

export const SkinImage = styled.Image`
    height: 90%
    width: 100%
`;

export const SkinName = styled.Text`
  font-size: 18px
  margin-top: 5px
  font-weight: bold;
  text-align: center;
  color: #CAA92E;
`

export const NomeItem = styled.Text`
  text-align: center;
  color: #CAA92E;
  margin-top: 5px;
  font-size: 30px;
  margin-bottom: 20px;
`;