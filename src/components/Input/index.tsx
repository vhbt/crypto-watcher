import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput } from './styles';

type InputProps = TextInputProps;

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <Container>
      <TextInput placeholderTextColor="#8A8A8A" {...rest} />
    </Container>
  );
};

export default Input;
