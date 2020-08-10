import { Action } from 'redux';

export interface Product {
  id: number;
  name: string;
  description: string;
  unit_price: number;
  image?: string;
}

export interface Category {
  id: number;
  name: string;
  image?: string;
  items: Product[];
}

export interface AppAction<T> extends Action {
  type: string;
  payload: T;
}
