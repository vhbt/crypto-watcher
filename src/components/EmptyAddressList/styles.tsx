import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

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

export const Image = styled.Image`
  width: ${width * 0.4}px;
  height: ${height * 0.4}px;
`;
