import * as actionTypes from "./actionTypes";

export function changeCategory(category) {
  return {
    type: actionTypes.CHANGE_CATEGORY,
    payload: category,
  };
}

export function getCategoriesSuccess(categories){
  return {type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories}
}

export function getCategories() {
  return async function (dispatch) {
    let url = "http://localhost:3000/categories";
    const response = await fetch(url);
    const result_1 = await response.json();
    return dispatch(getCategoriesSuccess(result_1));
  };
}
