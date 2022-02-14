import { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

export const useNetworkInfo = () => {
  const [isConnected, setConnected] = useState(true);

  useEffect(() => {
    return NetInfo.addEventListener(state => {
      setConnected((state.isConnected && state.isInternetReachable) || false);
    });
  });

  return isConnected;
};
