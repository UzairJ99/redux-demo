import * as TYPES from './types';

export const fetchPosts = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch({
        type: TYPES.FETCH_POSTS,
        posts: posts
    }));
}