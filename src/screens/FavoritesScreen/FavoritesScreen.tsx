import React, { useCallback } from 'react';
import { Button, FlatList, SafeAreaView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { resetState, StoreState } from '../../store';
import { TitleRow } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export const FavoritesScreen = () => {
  const favorites = useSelector((state: StoreState) => state.main.favorites);

  const navigation = useNavigation<any>();

  const onSearch = useCallback(() => {
    navigation.navigate('Search');
  }, [navigation]);

  const dispatch = useDispatch();

  const onResetState = useCallback(() => {
    dispatch(resetState());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <View>
            <Button title="Search" onPress={onSearch} />
            <Button title="Reset State" onPress={onResetState} />
          </View>
        )}
        data={favorites}
        renderItem={({ item }) => <TitleRow id={item} />}
      />
    </SafeAreaView>
  );
};
