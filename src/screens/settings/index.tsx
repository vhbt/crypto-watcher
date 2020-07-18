import React, { useState, useCallback } from 'react';
import { Alert, Keyboard } from 'react-native';

import { SafeAreaView, Container, Title, Text } from './styles';

import { useData } from '../../hooks/data';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Settings: React.FC = () => {
  const { apiKey, setApiKey } = useData();
  const [currentApiKey, setCurrentApiKey] = useState(apiKey);

  const handleSetApiKey = useCallback(() => {
    setCurrentApiKey(currentApiKey);
    Keyboard.dismiss();
    Alert.alert('All good!', 'Your API Key has been updated.');
  }, []);

  return (
    <SafeAreaView>
      <Container>
        <Title>Settings</Title>
        <Text>Blockonomics API Key</Text>
        <Input placeholder="API Key" value={apiKey} onChangeText={setApiKey} />
        <Button containerStyle={{ marginTop: 25 }} onPress={handleSetApiKey}>
          Save
        </Button>
      </Container>
    </SafeAreaView>
  );
};

export default Settings;
