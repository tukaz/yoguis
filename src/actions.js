import {
    CHANGE_SEARCH_FIELD,
    REQUEST_YOGUIS_PENDING,
    REQUEST_YOGUIS_SUCCESS,
    REQUEST_YOGUIS_FAILED
} from "./constants";

export const setSearchField = (text) => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text 
    }
}

export const requestYoguis = () => (dispatch) => {
    dispatch({type: REQUEST_YOGUIS_PENDING})
    fetch("https://jsonplaceholder.typicode.com/users/")
        .then(resp => resp.json())
        .then(data=> dispatch({type: REQUEST_YOGUIS_SUCCESS,payload:data}))
        .catch(error=> dispatch({type: REQUEST_YOGUIS_FAILED,payload:error}))

}