import styled from '../../constants/styled';

export const Container = styled.View`
  padding: 25px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.Text`
  font-size: 24px;
  color: ${props => props.theme.colors.primary};
  font-family: 'Karla_700Bold';
`;

export const IconButton = styled.TouchableOpacity``;
