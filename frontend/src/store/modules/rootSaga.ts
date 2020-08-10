import { all } from 'redux-saga/effects';

import categories from './categories/sagas';

export default function* rootSaga(): Generator<unknown> {
  return yield all([categories]);
}
