import { combineReducers } from 'redux';

export const rootReducer = combineReducers({});

export type StoreState = ReturnType<typeof rootReducer>;
