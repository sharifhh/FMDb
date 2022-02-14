import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Image, SafeAreaView, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TitlesService } from '../../services';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorite,
  hideTitle,
  removeFromFavorite,
  StoreState,
} from '../../store';

export const TitleDetails = () => {
  const {
    params: { id },
  } = useRoute() as { params: { id: string } };

  const [title, setTitle] = useState<TitleDetails | undefined>();

  const favorites = useSelector((state: StoreState) => state.main.favorites);

  const isFavorite = useMemo(() => favorites.includes(id), [favorites, id]);

  useEffect(() => {
    TitlesService.getById(id).then(result => setTitle(result));
  }, [id]);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const onChangeFavorite = useCallback(() => {
    navigation.goBack();
    dispatch(
      isFavorite ? removeFromFavorite(title!.id) : addToFavorite(title!.id),
    );
  }, [dispatch, isFavorite, navigation, title]);

  const onHideTitle = useCallback(() => {
    navigation.goBack();
    dispatch(hideTitle(title!.id));
  }, [dispatch, navigation, title]);

  return title ? (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          source={{ uri: title.poster }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text>Title: {title.name}</Text>
        <Text>Description: {title.description}</Text>
        <Text>Rating: {title.rating}</Text>
        <Button
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          onPress={onChangeFavorite}
        />
        <Button title="Hide title" onPress={onHideTitle} />
      </View>
    </SafeAreaView>
  ) : null;
};
