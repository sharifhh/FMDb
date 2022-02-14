import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FavoritesScreen, SearchScreen, TitleDetails } from '../screens';

const Stack = createNativeStackNavigator();

export const MainRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="TitleDetails" component={TitleDetails} />
    </Stack.Navigator>
  );
};
