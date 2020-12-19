import * as TYPES from '../actions/types';

const initialState = {
    items: [], // the list of posts
    item: {} // the single post
}

export default (state = initialState, action) => {
    switch(action.type) {
        case TYPES.FETCH_POSTS:
            return {
                ...state,
                items: action.data
            }
        default:
            return state;
    }
}