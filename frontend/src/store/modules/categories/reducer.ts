import produce from 'immer';
import { AppAction } from '../../../@types/index';

import * as types from './types';
import { Category } from '../../../@types';

export interface CategoriesState {
  loading: boolean;
  categorySelected?: Category;
  categories: Category[];
}

const initialState: CategoriesState = {
  loading: false,
  categorySelected: undefined,
  categories: [],
};

export default function categories(
  state = initialState,
  action = {} as AppAction<{ categories: Category[]; category?: Category }>,
): CategoriesState | void {
  return produce(state, draft => {
    switch (action.type) {
      case types.GET_CATEGORIES:
      case types.GET_CATEGORY: {
        draft.loading = true;
        break;
      }

      case types.GET_CATEGORIES_SUCCESS: {
        draft.categories = action.payload.categories;
        draft.loading = false;
        break;
      }

      case types.GET_CATEGORY_SUCCESS: {
        draft.categorySelected = action.payload.category;
        draft.loading = false;
        break;
      }

      case types.GET_CATEGORIES_FAIL: {
        draft.categories = [];
        draft.categorySelected = undefined;
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
