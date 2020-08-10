import produce from 'immer';
import { AppAction } from '../../../@types/index';

import * as types from './types';
import { Category } from '../../../@types';

export interface CategoriesState {
  loading: boolean;
  categories: Category[];
}

const initialState: CategoriesState = {
  loading: false,
  categories: [],
};

export default function categories(
  state = initialState,
  action = {} as AppAction<{ categories: Category[] }>,
): CategoriesState | void {
  return produce(state, draft => {
    switch (action.type) {
      case types.GET_CATEGORIES: {
        draft.loading = true;
        break;
      }

      case types.GET_CATEGORIES_SUCCESS: {
        draft.categories = action.payload.categories;
        draft.loading = false;
        break;
      }

      case types.GET_CATEGORIES_FAIL: {
        draft.categories = [];
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
