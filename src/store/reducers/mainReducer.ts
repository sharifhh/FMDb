import { ACTIONS } from '../actions';

interface MainState {
  favorites: string[];
  hidden: string[];
}

const initialState: MainState = {
  favorites: [],
  hidden: [],
};

export const mainReducer = (state = initialState, action: any): MainState => {
  switch (action.type) {
    case ACTIONS.RESET_STATE:
      return {
        ...initialState,
      };
    case ACTIONS.ADD_TO_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case ACTIONS.REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(id => id !== action.payload),
      };
    case ACTIONS.HIDE_TITLE:
      return {
        ...state,
        favorites: state.favorites.filter(id => id !== action.payload),
        hidden: [...state.hidden, action.payload],
      };
    default:
      return state;
  }
};
