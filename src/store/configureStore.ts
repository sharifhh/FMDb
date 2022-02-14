import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

import { rootReducer } from './reducers';
import { reduxStorage } from '../utils';

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);
export { store, persistor };
