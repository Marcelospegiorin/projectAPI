import styled from "styled-components";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    background-color: #011425;
    padding: 10px
    justify-content: space-between
`;

export const Button = styled.TouchableOpacity`
    width: 150px
    height: 100px
    margin-top: 20px
    margin-left: 10px
    margin-right: 10px
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
    margin-top: 50px;
`;

export const SubText = styled.Text`
    font-size: 25px;
    color: #CAA92E;
`;

export const SubView = styled.View`
    border: 2px #1ECEE7 solid
    padding: 10px
    border-radius: 15px
    width: 100%;
    height: auto;
    align-items: center;
    margin-top: 50px;
`;