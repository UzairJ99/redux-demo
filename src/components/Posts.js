import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';
import PropTypes from 'prop-types';

const Posts = (props) => {

    useEffect((props) => {
        fetchPosts();
    }, [])
    
    return (
        <div>
            <h1>Posts</h1>
            <div>
                {
                    props.posts.map((post) => {
                    return (
                        <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        </div>
                    )
                    })
                }
            </div>
        </div>
    )
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps, {fetchPosts})(Posts);