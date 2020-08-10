import {
  createStore,
  compose,
  applyMiddleware,
  Store,
  Reducer,
  Middleware,
} from 'redux';

export default (
  reducers: Reducer,
  middlewares: Middleware[],
): Store<unknown> => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
