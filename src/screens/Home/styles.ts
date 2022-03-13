import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Student } from '.';

export const Container = styled.View`
  flex: 1;
  margin-top:70px;
  margin-left:16px;
`;

export const Label = styled.Text`
    font-family: 'JostBold';
    font-size:30px;
    color:white;
`

export const FlatListStudents = styled(
  FlatList as new () => FlatList<Student>
).attrs({
  showsVerticalScrollIndicator: true,
  contentContainerStyle: {
      paddingBottom: 120
  }
})``;
