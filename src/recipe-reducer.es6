import { SET_RECIPES, SET_FEATURED_RECIPE } from './action-creators';

export default function recipes(state = {}, action) {
  switch (action.type) {
    case SET_RECIPES:
      return {
        ...state,
        recipes: action.data
      };
    case SET_FEATURED_RECIPE:
      return {
        ...state,
        featuredRecipe: action.data
      };

    default:
      return state
  }
}
