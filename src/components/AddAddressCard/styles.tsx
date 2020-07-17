import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient)`
  padding: 24px;
  border-radius: 10px;
  flex-direction: row;
`;

export const CardInfo = styled.View`
  max-width: 95%;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.inverted};
  font-family: 'Karla_700Bold';
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Description = styled.Text`
  color: ${props => props.theme.colors.inverted};
  font-family: 'Karla_400Regular';
  max-width: 90%;
`;

export const Image = styled.Image`
  width: 45px;
  height: 45px;
`;
