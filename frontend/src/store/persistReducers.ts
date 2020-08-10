import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Reducer } from 'redux';

export default (reducers: any): Reducer => {
  const persistedReducer = persistReducer(
    {
      key: 'liuv',
      storage,
      whitelist: ['cart'],
    },
    reducers,
  );

  return persistedReducer;
};
