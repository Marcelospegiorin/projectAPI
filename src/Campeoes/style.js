import styled from "styled-components";

export const Container = styled.View`
    width: 100%
    height: 100%
    align-items: center
    backgroundColor: #011425
`;

export const Button = styled.TouchableOpacity`
    width: 125px
    height: 50px

    margin-top: 20px

    align-items: center
    justify-content: center

    backgroundColor: #063C6A

    borderColor: #1ECEE7
    borderWidth: 2px
    border-radius: 15px

    flex-direction: row
`;

export const ViewTitulo = styled.View`
    align-items: center
    justify-content: center
    borderColor: #1ECEE7
    borderWidth: 2px
    border-radius: 7px
    backgroundColor: #063C6A
    margin-top: 8px
    margin-bottom: 490px
`;

export const ListaCampeoes = styled.Text`
    font-size: 40px
    color: #CAA92E
`;

export const TextButton = styled.Text`
    font-size: 20px
    color: #CAA92E
`;