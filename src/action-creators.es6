import request from 'superagent';

export function setRecipes(recipes) {
  return {
    type: 'SET_RECIPES',
    recipes
  }
}

export function setFeaturedRecipe(recipe) {
  console.log("featured recipe", recipe)
  return {
    type: 'SET_FEATURED_RECIPE',
    recipe
  }
}

export function fetchRecipes() {
  return (dispatch, getState) => {
    request.get('http://localhost:3000/recipes')
      .end((err, res)=>{
        if (err) {
          return null;
        }
        return dispatch(setRecipes(res.body.recipes));
      })
  }
}

export function fetchFeaturedRecipe() {
  return (dispatch, getState) => {
    request.get('http://localhost:3000/featured')
      .end((err, res)=>{
        if (err) {
          console.log("err", err)
          return null;
        }
        return dispatch(setFeaturedRecipe(res.body.recipe));
      })
  }
}

export function getHomePageData() {
  return (dispatch, getState) => {
    return Promise.all([
      dispatch(fetchFeaturedRecipe()),
      dispatch(fetchRecipes())
    ])
  }
}


//TODO add checks for existence of data so that things don't get rerequested on the browser
