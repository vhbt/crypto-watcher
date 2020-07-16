import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 12px;
  margin: 8px 12px;
  border-radius: 6px;
  background-color: #fff;
`;

export const DataContainer = styled.View`
  align-items: center;
  justify-content: space-between;
`;

export const CoinInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;

export const CoinImage = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const Address = styled.Text`
  color: #13183c;
  font-size: 18px;
  max-width: 80%;
  font-family: 'Roboto_500Medium';
`;

export const Value = styled.Text`
  color: #13183c;
  font-size: 24px;
  font-family: 'Roboto_500Medium';
  margin-top: 10px;
`;
