import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useRoute, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { Container, Header, HeaderItems, Card, Back, Title } from './styles';

interface RouteParams {
  colors: [];
}

const AddAddress: React.FC = () => {
  const { colors } = useRoute().params as RouteParams;
  const { goBack } = useNavigation();

  return (
    <Container>
      <Header colors={colors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
        <SafeAreaView>
          <HeaderItems>
            <Back onPress={() => goBack()}>
              <Ionicons name="ios-arrow-round-back" size={32} color="white" />
            </Back>
            <Title>Add account</Title>
          </HeaderItems>
        </SafeAreaView>
      </Header>
      <Card>{/*  */}</Card>
      <StatusBar style="light" backgroundColor="transparent" animated />
    </Container>
  );
};

export default AddAddress;
