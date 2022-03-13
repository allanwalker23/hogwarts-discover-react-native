import styled from 'styled-components/native';

export const Container = styled.View`

  width:350px;
  height:81px;
  background-color:${({theme})=>theme.colors.main};
  flex-direction:row;
  justify-content:space-between;
  border-radius:10px;

  margin-bottom:8px;
  
`;

export const House= styled.View`
    align-items:center;
    justify-content:center;
    margin-right:8px;

`


export const HouseIcon = styled.Image`
  width:60px;
  height:65px;
  border-radius:10px;
`

export const ContainerStudent = styled.View`
flex-direction: row;
align-items: center;
`
export const Image = styled.Image`
    width:56px;
    height:56px;
    margin:0 8px;
    border-radius:10px
`
export const NameStudent = styled.Text`
    font-family: 'Hogwarts';
    color:white;
    font-size:30px
`
export const Info = styled.View``  
export const BirthDate = styled.Text`
    font-family: 'JostMedium';
    color:white;
    font-size:16px
`