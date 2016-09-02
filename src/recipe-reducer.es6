export default function recipes(state = {}, action) {
  switch (action.type) {
    case 'SET_RECIPES_FULFILLED':
      return Object.assign({}, state, {
        recipes: action.payload
      })
    case 'SET_FEATURED_RECIPE_FULFILLED':
      return Object.assign({}, state, {
        featuredRecipe: action.payload
      });

    default:
      return state
  }
}
