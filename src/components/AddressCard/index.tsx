import React from 'react';

import {
  Container,
  DataContainer,
  CoinInfo,
  CoinImage,
  Address,
  Value,
} from './styles';

interface AddressCardProps {
  address: string;
  amount?: string;
  coinImage: string;
  coinName: string;
}

const AddressCard: React.FC<AddressCardProps> = ({
  address,
  amount = '0',
  coinImage,
  coinName,
}) => {
  return (
    <Container>
      <DataContainer>
        <Value>
          {amount} {coinName}
        </Value>
        <CoinInfo>
          <CoinImage
            source={{
              uri: coinImage,
            }}
          />
          <Address>{address}</Address>
        </CoinInfo>
      </DataContainer>
    </Container>
  );
};

export default AddressCard;
