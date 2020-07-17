import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  placeholderTextColor?: string;
}

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <Container>
      <TextInput {...rest} />
    </Container>
  );
};

export default Input;
