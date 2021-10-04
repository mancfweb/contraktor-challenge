import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'contracktor2020desafio',
      // whitelist: ['auth'],
      blacklist: ['contracts', 'parties'],
      storage,
    },
    reducers,
  );

  return persistedReducer;
};
