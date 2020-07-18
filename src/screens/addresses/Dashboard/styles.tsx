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
`;

export const NoApiKeyView = styled.View`
  align-items: center;
  align-self: center;
  max-width: 85%;
`;

export const NoApiKeyText = styled.Text`
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin-top: 10px;
`;
