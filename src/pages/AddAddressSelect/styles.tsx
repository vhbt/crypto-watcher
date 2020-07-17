import styled from 'styled-components/native';
import { SafeAreaView as SAV } from 'react-native-safe-area-context';

export const SafeAreaView = styled(SAV)`
  flex: 1;
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
  font-size: 28px;
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
