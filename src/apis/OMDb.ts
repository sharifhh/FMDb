import { create } from 'apisauce';

interface OMDbTitle {
  imdbID: string;
  Title: string;
  Poster: string;
}

interface OMDbTitleDetails extends OMDbTitle {
  Plot: string;
  imdbRating: string;
}

const api = create({
  baseURL: 'https://omdbapi.com',
});

const searchByTitle: (
  searchValue: string,
) => Promise<Title[]> = searchValue => {
  return api
    .get<{ Search?: OMDbTitle[] }>('/', {
      apikey: '40347e03',
      s: searchValue,
    })
    .then(response =>
      (response.data?.Search ?? [])
        .map(searchResult => ({
          id: searchResult.imdbID,
          name: searchResult.Title,
          poster: searchResult.Poster,
        }))
        .filter(title => title.poster !== 'N/A'),
    );
};

const getById: (id: string) => Promise<TitleDetails> = id => {
  return api
    .get<OMDbTitleDetails>('/', {
      apikey: '40347e03',
      i: id,
    })
    .then(({ data }) => {
      if (data) {
        return {
          id: data.imdbID,
          name: data.Title,
          poster: data.Poster,
          description: data.Plot,
          rating: data.imdbRating,
        };
      }
      throw new Error();
    });
};

export default { getById, searchByTitle };
