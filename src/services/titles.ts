import { OMDbAPI } from '../apis';

const searchByTitle: (
  searchValue: string,
  hiddenIds: string[],
) => Promise<Title[]> = (searchValue, hiddenIds) => {
  return OMDbAPI.searchByTitle(searchValue).then(titles =>
    titles.filter(title => !hiddenIds.includes(title.id)),
  );
};

const getById: (id: string) => Promise<TitleDetails> = id => {
  return OMDbAPI.getById(id);
};

export default { getById, searchByTitle };
