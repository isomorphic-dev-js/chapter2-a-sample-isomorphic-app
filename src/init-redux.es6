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

  return compose(
    applyMiddleware(thunkMiddleware)
  )(createStore)(reducer, initialStore);
}
