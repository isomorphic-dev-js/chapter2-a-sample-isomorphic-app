export default function recipes(state = {}, action) {
  switch (action.type) {
    case 'SET_RECIPES':
      return Object.assign({}, state, {
        recipes: action.recipes
      })
    case 'SET_FEATURED_RECIPE':
      console.log("action", action)
      return Object.assign({}, state, {
        featuredRecipe: action.recipe
      });
    default:
      return state
  }
}
