import styled from "styled-components";

export const Container = styled.View`
    width: 100%
    height: 100%
    align-items: center
    backgroundColor: #011425
`;

export const Button = styled.TouchableOpacity`
    width: 250px
    height: 75px

    margin-top: 20px

    align-items: center
    justify-content: center

    backgroundColor: #063C6A

    borderColor: #1ECEE7
    borderWidth: 2px
    border-radius: 15px

    flex-direction: row
`;

export const TitleApp = styled.Text`
    font-size: 40px
    color: #CAA92E
    margin-top: 10px
`;

export const SubText = styled.Text`
    font-size: 30px
    color: #CAA92E
`;

export const SubView = styled.View`
    width: 100%
    height: 200px
    align-items: center
    margin-top: 50px
`;