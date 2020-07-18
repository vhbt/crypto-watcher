import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  padding-top: ${getStatusBarHeight()}px;
  background-color: ${props => props.theme.colors.background};
`;

export const Container = styled.View`
  flex: 1;
  padding: 25px;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-family: 'Karla_700Bold';
  font-size: 24px;
  margin-bottom: 30px;
`;

export const Text = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
  margin-bottom: 10px;
`;
