import { Category } from '../../../@types';
import * as types from './types';

interface CategoryType {
  type: string;
  payload: { categories: Category[] };
}

export function getCategories(): Omit<CategoryType, 'payload'> {
  return {
    type: types.GET_CATEGORIES,
  };
}

export function getCategoriesSuccess(categories: Category[]): CategoryType {
  return {
    type: types.GET_CATEGORIES_SUCCESS,
    payload: { categories },
  };
}

export function getCategoriesFail(): Omit<CategoryType, 'payload'> {
  return {
    type: types.GET_CATEGORIES_FAIL,
  };
}
