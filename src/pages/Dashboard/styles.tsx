import styled from 'styled-components/native';
import { SafeAreaView as SAV } from 'react-native-safe-area-context';

export const SafeAreaView = styled(SAV)`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.background};
`;
