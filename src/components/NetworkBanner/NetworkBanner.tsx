import React from 'react';
import { useNetworkInfo } from '../../hooks';
import { Text, View } from 'react-native';

export const NetworkBanner = () => {
  const isConnected = useNetworkInfo();

  return isConnected ? (
    <View style={{ width: '100%' }}>
      <Text>You are currently disconnected</Text>
    </View>
  ) : null;
};
