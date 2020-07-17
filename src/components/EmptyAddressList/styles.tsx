import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 20px;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-family: 'Karla_400Regular';
  font-size: 20px;
  text-align: center;
  color: ${props => props.theme.colors.primary};
`;
