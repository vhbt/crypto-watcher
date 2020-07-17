import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height: 100%;
  position: relative;
  padding: 20px;
`;

export const HeaderItems = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Back = styled.TouchableOpacity``;

export const Card = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.colors.background};
  position: absolute;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  margin-top: ${Dimensions.get('window').width * 0.25}px;
  padding: 30px 25px;
`;

export const CardTitle = styled.Text`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.inverted};
  font-family: 'Karla_700Bold';
  font-size: 16px;
  margin: 0 25px;
`;
