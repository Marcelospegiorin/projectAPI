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
    padding-left: 20px;

    align-items: center;

    background-color: #063C6A;

    border-color: #1ECEE7;
    border-width: 2px;
    border-radius: 15px;

    flex-direction: row;
`;

export const TitleView = styled.View`
    width: 100%;
    height: 20%;

    align-items: center;

    margin-top: 40px;
    margin-bottom: 60px;
`;

export const SubText = styled.Text`
    font-size: 30px;
    color: #CAA92E;
`;

export const SubView = styled.View`
    width: 100%;
    height: 200px;
    align-items: center;
    margin-top: 50px;
`;