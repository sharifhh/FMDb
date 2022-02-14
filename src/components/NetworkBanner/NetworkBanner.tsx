import React, { FC } from 'react';
import { useNetworkInfo } from '../../hooks';
import { SafeAreaView, Text } from 'react-native';
import { styles } from './styles';

export const NetworkBanner: FC = () => {
  const isConnected = useNetworkInfo();

  return !isConnected ? (
    <SafeAreaView style={styles.container}>
      <Text>You are currently disconnected</Text>
    </SafeAreaView>
  ) : null;
};
