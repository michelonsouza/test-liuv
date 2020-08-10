import { Product, AppAction } from '../../../@types';
import * as types from '../../types';

export function addToCart(product: Product): AppAction<{ product: Product }> {
  return {
    type: types.ADD_TO_CART,
    payload: { product },
  };
}

export function removeFronCart(
  productId: number,
): AppAction<{ productId: number }> {
  return {
    type: types.REMOVE_FROM_CART,
    payload: { productId },
  };
}
