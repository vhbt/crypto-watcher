import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  padding-top: ${getStatusBarHeight()}px;
  background-color: ${props => props.theme.colors.background};
`;

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.background};
  margin: 20px 25px;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-family: 'Karla_700Bold';
  font-size: 24px;
  margin-bottom: 20px;
`;

export const CancelButton = styled.TouchableOpacity`
  width: 20%;
  height: 30px;
  margin-bottom: 10px;
`;

export const CancelText = styled.Text`
  color: ${props => props.theme.colors.secondary};
  font-size: 16px;
  font-family: 'Karla_400Regular';
`;
