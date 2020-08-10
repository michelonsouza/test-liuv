import produce from 'immer';
import { AppAction } from '../../../@types/index';
import { Product } from '../../../@types/index';

import * as types from '../../types';

export interface CartState {
  items: Product[];
  totalItems: number;
  total: number;
  loading: boolean;
}

const initalState: CartState = {
  items: [],
  totalItems: 0,
  total: 0,
  loading: false,
};

export default function cart(
  state = initalState,
  action = {} as AppAction<{ product: Product }>,
): CartState | void {
  return produce(state, draft => {
    switch (action.type) {
      case types.ADD_TO_CART: {
        draft.items.push(action.payload.product);
        draft.loading = false;
        draft.totalItems += 1;
        break;
      }
      case types.REMOVE_FROM_CART: {
        draft.items = draft.items.filter(
          product => product.id !== action.payload.product.id,
        );
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
