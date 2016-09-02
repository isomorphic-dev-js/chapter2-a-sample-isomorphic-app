import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose } from 'redux';
import recipes from './recipe-reducer';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

export default function (initialStore={}) {
  const reducer = combineReducers({
    recipes
  });
  let middleware = [promiseMiddleware(), thunkMiddleware]
  return compose(
    applyMiddleware(...middleware)
  )(createStore)(reducer, initialStore);
}
