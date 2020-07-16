import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, TouchableOpacity, Text } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: string;
  containerStyle?: {};
}

const Button: React.FC<ButtonProps> = ({
  children,
  containerStyle = {},
  ...rest
}) => {
  return (
    <Container
      style={containerStyle}
      colors={['#7EF192', '#2DC897']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <TouchableOpacity {...rest}>
        <Text>{children}</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Button;
