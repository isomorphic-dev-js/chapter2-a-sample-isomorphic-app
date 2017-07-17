import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose } from 'redux';
import recipes from './recipe-reducer';
import thunkMiddleware from 'redux-thunk';

export default function (initialStore={}) {
  const reducer = combineReducers({
    recipes
  });
  let middleware = [thunkMiddleware]
  return compose(
    applyMiddleware(...middleware)
  )(createStore)(reducer, initialStore);
}
