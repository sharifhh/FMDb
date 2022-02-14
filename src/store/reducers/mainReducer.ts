import { ACTIONS } from '../actions';

interface MainState {
  isLoading: boolean;
  favorites: string[];
  hidden: string[];
}

const initialState: MainState = {
  isLoading: true,
  favorites: [],
  hidden: [],
};

export const mainReducer = (state = initialState, action): MainState => {
  switch (action.type) {
    case ACTIONS.PERSIST_COMPLETE:
      return {
        ...state,
        isLoading: false,
      };
    case ACTIONS.ADD_TO_FAVORITE:
      return {
        ...initialState,
        favorites: [...state.favorites, action.payload],
      };
    case ACTIONS.REMOVE_FROM_FAVORITE:
      return {
        ...initialState,
        favorites: state.favorites.filter(id => id !== action.payload),
      };
    case ACTIONS.HIDE_TITLE:
      return {
        ...initialState,
        hidden: [...state.hidden, action.payload],
      };
    default:
      return state;
  }
};
