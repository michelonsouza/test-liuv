import produce from 'immer';
import { AppAction } from '../../../@types/index';
import { Product } from '../../../@types/index';

import * as types from './types';

export interface Item extends Product {
  quantity: number;
}

export interface CartState {
  items: Item[];
  loading: boolean;
}

const initalState: CartState = {
  items: [],
  loading: false,
};

export default function cart(
  state = initalState,
  action = {} as AppAction<{ product: Product }>,
): CartState | void {
  return produce(state, draft => {
    switch (action.type) {
      case types.FINISH: {
        draft.items = [];
        draft.loading = false;
        break;
      }

      case types.ADD_TO_CART: {
        const { id } = action.payload.product;
        const product = draft.items.find(item => item.id === id);

        if (product) {
          draft.items.forEach(item => {
            if (item.id === id) {
              item.quantity += 1;
            }
          });
        } else {
          draft.items.push({ ...action.payload.product, quantity: 1 });
        }

        draft.loading = false;
        break;
      }

      case types.ADD_ONE_PRODUCT: {
        draft.items = draft.items.map(item =>
          item.id === action.payload.product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );

        break;
      }

      case types.REMOVE_ONE_PRODUCT: {
        draft.items = draft.items.map(item =>
          item.id === action.payload.product.id && item.quantity > 0
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        );

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
