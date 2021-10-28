import styled from "styled-components";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    background-color: #011425;
`;

export const Button = styled.TouchableOpacity`
    width: 250px;
    height: 75px;

    margin-top: 20px;

    align-items: center;
    justify-content: center;

    background-color: #063C6A;

    border-color: #1ECEE7;
    border-width: 2px;
    border-radius: 15px;

    flex-direction: row;
`;

export const TitleApp = styled.Text`
    font-size: 40px;
    color: #CAA92E;
    margin-top: 10px;
`;

export const SubText = styled.Text`
    font-size: 30px;
    color: #CAA92E;
`;

export const ButtonHome = styled.TouchableOpacity`
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

export const TextButton = styled.Text`
    font-size: 20px;
    color: #CAA92E;
`;