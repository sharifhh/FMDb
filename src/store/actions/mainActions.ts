import { ACTIONS } from './actions';

export const addToFavorite = (payload: string) => ({
  type: ACTIONS.ADD_TO_FAVORITE,
  payload,
});

export const removeFromFavorite = (payload: string) => ({
  type: ACTIONS.REMOVE_FROM_FAVORITE,
  payload,
});

export const hideTitle = (payload: string) => ({
  type: ACTIONS.HIDE_TITLE,
  payload,
});

export const resetState = () => ({ type: ACTIONS.RESET_STATE });
