import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NetworkBanner } from '../components';

const Stack = createNativeStackNavigator();

export const MainRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={NetworkBanner} />
    </Stack.Navigator>
  );
};
