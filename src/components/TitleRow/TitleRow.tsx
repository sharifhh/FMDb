import React, { FC, useCallback, useEffect, useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { TitlesService } from '../../services';
import { ListItem } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

type Props = {
  id?: string;
  title?: Title;
};

export const TitleRow: FC<Props> = ({ id, title }) => {
  const [titleState, setTitleState] = useState<Title | undefined>(title);

  useEffect(() => {
    if (id) {
      TitlesService.getById(id).then(titleResponse =>
        setTitleState(titleResponse),
      );
    }
  }, [id]);

  const navigation = useNavigation<any>();

  const onPress = useCallback(() => {
    if (titleState?.id) {
      navigation.navigate('TitleDetails', {
        id: titleState.id,
      });
    }
  }, [navigation, titleState?.id]);

  return titleState ? (
    <ListItem
      Component={TouchableOpacity}
      onPress={onPress}
      containerStyle={styles.container}
      bottomDivider>
      <Image
        source={{ uri: titleState.poster }}
        style={styles.image}
        resizeMode="contain"
      />
      <ListItem.Content>
        <ListItem.Title>{titleState.name}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  ) : null;
};
