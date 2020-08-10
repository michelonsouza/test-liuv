/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { all, call, put, takeLatest } from 'typed-redux-saga';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { getCategoriesSuccess, getCategoriesFail } from './actions';
import * as types from './types';
import { Category } from '../../../@types';

export function* categoriesRequest() {
  try {
    const { data: response } = yield call(api.get, '/categories');

    yield put(getCategoriesSuccess(response as Category[]));
  } catch (error) {
    toast.error('Falha ao carregar categories');
    yield put(getCategoriesFail());
  }
}

export default all([takeLatest(types.GET_CATEGORIES, categoriesRequest)]);
