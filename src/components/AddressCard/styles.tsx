import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient)`
  padding: 12px;
  margin: 8px 12px;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.inverted};
`;

export const DataContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CoinInfo = styled.View`
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;

export const CoinImage = styled.Image`
  width: 50px;
  height: 50px;
  margin: 0 10px;
`;

export const Address = styled.Text`
  color: ${props => props.theme.colors.inverted};
  font-size: 18px;
  max-width: 80%;
  font-family: 'Karla_400Regular';
`;

export const Value = styled.Text`
  color: ${props => props.theme.colors.inverted};
  font-size: 24px;
  font-family: 'Karla_700Bold';
  margin-bottom: 10px;
`;
