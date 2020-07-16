import React from 'react';
import { TouchableOpacity, GestureResponderEvent } from 'react-native';
import { Container, CardInfo, Title, Description, Image } from './styles';

interface AddAddressCardProps {
  colors?: [];
  title: string;
  description: string;
  image: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const AddAddressCard: React.FC<AddAddressCardProps> = ({
  colors = ['#6D63EF', '#A1A3FF'],
  title,
  description,
  image,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container colors={colors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
        <CardInfo>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </CardInfo>
        <Image
          source={{
            uri: image,
          }}
        />
      </Container>
    </TouchableOpacity>
  );
};

export default AddAddressCard;
