import fetch from 'isomorphic-fetch';

export const SET_RECIPES = 'SET_RECIPES';
export const SET_FEATURED_RECIPE = 'SET_FEATURED_RECIPE';

export function fetchRecipes() {
  return dispatch => {
    return fetch('http://localhost:3000/recipes', {
      method: 'GET'
    }).then((response) => {
      return response.json().then((data) => {
        return dispatch({
          type: SET_RECIPES,
          data: data.recipes
        });
      });
    }).catch((e) => {
      console.log("error", e)
    });
  }
}

export function fetchFeaturedRecipe() {
  return dispatch => {
    return fetch('http://localhost:3000/featured', {
      method: 'GET'
    }).then((response) => {
      return response.json().then((data) => {
        return dispatch({
          type: SET_FEATURED_RECIPE,
          data: data.recipe
        });
      });
    }).catch((e) => {
      console.log("error", e)
    });
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
