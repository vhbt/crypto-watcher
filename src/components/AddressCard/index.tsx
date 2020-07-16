import React, { useState } from 'react';
import {
  LongPressGestureHandler,
  State,
  LongPressGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler';
import { Alert } from 'react-native';

import {
  Container,
  DataContainer,
  CoinInfo,
  CoinImage,
  Address,
  Value,
} from './styles';

import { useData } from '../../hooks/data';

interface AddressCardProps {
  address: string;
  amount?: number;
  coinImage: string;
  coinName: string;
  colors?: [];
  loading?: boolean;
}

const AddressCard: React.FC<AddressCardProps> = ({
  address,
  amount = 0,
  coinImage,
  coinName,
  colors = ['#6D63EF', '#A1A3FF'],
  loading = false,
}) => {
  const { deleteAddress } = useData();

  const handleLongPress = (e: LongPressGestureHandlerStateChangeEvent) => {
    if (e.nativeEvent.state === State.ACTIVE) {
      Alert.alert('Confirmation', `Do you want to delete ${address}?`, [
        {
          text: 'Yes',
          style: 'destructive',
          onPress: () => deleteAddress(address),
        },
        {
          text: 'No',
          style: 'cancel',
        },
      ]);
    }
  };

  return (
    <LongPressGestureHandler onHandlerStateChange={handleLongPress}>
      <Container colors={colors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
        <DataContainer>
          <CoinImage
            source={{
              uri: coinImage,
            }}
          />
          <CoinInfo>
            <Value>
              {loading ? 'Loading...' : `${amount / 100000000} ${coinName}`}
            </Value>
            <Address>{address}</Address>
          </CoinInfo>
        </DataContainer>
      </Container>
    </LongPressGestureHandler>
  );
};

export default AddressCard;
