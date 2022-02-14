import { createStore } from 'redux';
import { persistReducer } from 'redux-persist';

import { rootReducer } from './reducers';
import { reduxStorage } from '../utils';

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
