import styled from "styled-components";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    background-color: #011425;
`;

export const ButtonContainer = styled.View`
    align-items: center;
    width: 50%;
    height: 50%;
    padding: 70px

`;

export const Button = styled.TouchableOpacity`
    width: 250px;
    height: 75px;

    margin-top: 20px;
    padding-left: 20px;

    align-items: center;

    background-color: #063C6A;

    border-color: #1ECEE7;
    border-width: 2px;
    border-radius: 15px;

    flex-direction: row;
`;

export const TitleDatabase = styled.Text`
    font-size: 40px;
    color: #CAA92E;
    margin-top: 20px
`;

export const SubText = styled.Text`
    font-size: 30px;
    color: #CAA92E;
`;

export const ButtonHome = styled.TouchableOpacity`
    margin-top: 170px;
    align-items: center;
    justify-content: center;
    background-color: #063C6A;
    border-color: #1ECEE7;
    border-width: 2px;
    border-radius: 15px;
    flex-direction: row;

    width: 80px
    height: 75px
`;