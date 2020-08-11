import { Product, AppAction } from '../../../@types';
import * as types from './types';

export function addToCart(product: Product): AppAction<{ product: Product }> {
  return {
    type: types.ADD_TO_CART,
    payload: { product },
  };
}

export function addOneProduct(
  product: Product,
): AppAction<{ product: Product }> {
  return {
    type: types.ADD_ONE_PRODUCT,
    payload: { product },
  };
}

export function removeOneProduct(
  product: Product,
): AppAction<{ product: Product }> {
  return {
    type: types.REMOVE_ONE_PRODUCT,
    payload: { product },
  };
}

export function removeFronCart(
  product: Product,
): AppAction<{ product: Product }> {
  return {
    type: types.REMOVE_FROM_CART,
    payload: { product },
  };
}

export function finish(): { type: string } {
  return {
    type: types.FINISH,
  };
}
