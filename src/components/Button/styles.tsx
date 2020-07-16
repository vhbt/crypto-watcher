import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient)`
  height: 50px;
  width: 100%;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-family: 'Karla_700Bold';
  font-size: 18px;
`;
