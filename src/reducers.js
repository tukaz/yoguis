import {
    CHANGE_SEARCH_FIELD,
    REQUEST_YOGUIS_PENDING,
    REQUEST_YOGUIS_SUCCESS,
    REQUEST_YOGUIS_FAILED
} from "./constants";

const initialStateSearch = {
    searchField: ''
}

export const searchYoguis = (state = initialStateSearch, action={}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({},state, {searchField:action.payload })
        default:
            return state;
    }
}

const initialStateRequest = {
    yoguis: [],
    isPending: false,
    error: ''
}

export const requestYoguis = (state = initialStateRequest, action={}) => {
    switch (action.type) {
        case REQUEST_YOGUIS_PENDING:
            return Object.assign({},state, {isPending:true })
        case REQUEST_YOGUIS_SUCCESS:
            return Object.assign({},state, {yoguis:action.payload, isPending: false })
        case REQUEST_YOGUIS_FAILED:
            return Object.assign({},state, {error:action.payload, isPending: false })
        default:
            return state;
    }
}
