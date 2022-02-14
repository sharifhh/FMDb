import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { TitleRow } from '../../components';
import { SearchBar } from 'react-native-elements';
import { TitlesService } from '../../services';
import { useSelector } from 'react-redux';
import { StoreState } from '../../store';
import { styles } from './styles';

export const SearchScreen = () => {
  const [searchResults, setSearchResults] = useState<Title[]>([]);

  const [searchValue, setSearchValue] = useState('');

  const hidden = useSelector((state: StoreState) => state.main.hidden);

  useEffect(() => {
    setSearchResults([]);
    if (searchValue) {
      TitlesService.searchByTitle(searchValue, hidden).then(response =>
        setSearchResults(response),
      );
    }
  }, [searchValue, hidden]);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        lightTheme
        placeholder="Type Here..."
        onChangeText={text => setSearchValue(text)}
        value={searchValue}
      />
      <FlatList
        data={searchResults}
        renderItem={({ item }) => <TitleRow title={item} />}
      />
    </SafeAreaView>
  );
};
