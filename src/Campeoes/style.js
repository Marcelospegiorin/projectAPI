import styled from "styled-components";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    background-color: #011425;
`;

export const Button = styled.TouchableOpacity`
    width: 125px;
    height: 50px;
    margin-top: 10px;
    align-items: center;
    margin-bottom: 10px;
    justify-content: center;
    background-color: #063C6A;
    border-color: #1ECEE7;
    border-width: 2px;
    border-radius: 15px;
    flex-direction: row;
`;

export const ViewTitulo = styled.View`
    align-items: center;
    justify-content: center;
    border-color: #1ECEE7;
    border-width: 2px;
    border-radius: 7px;
    background-color: #063C6A;
    margin-top: 15px;
    margin-bottom: 20px;
    width: 90%;
    height: 60px;
`;

export const ListaCampeoes = styled.Text`
    font-size: 33px;
    color: #CAA92E;
`;

export const TextButton = styled.Text`
    font-size: 20px;
    color: #CAA92E;
`;