import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner'
import PostItem from './PostItem'
import PostForm from './PostForm'
import { getPost } from '../../actions/post';
import CommentForm from '../post/CommentForm';
import post from '../../reducers/post';


const Posts = ({ getPosts, post: { posts, loading }}) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? <Spinner /> : <Fragment>test
  <h1 className="large text-primary">Posts</h1>
   <p className="lead">
    <i className="fas fa-user">Welcome to the community</i>
  </p>
  <PostForm />
  <div>
    {posts.map(post => (
      <PostItem key={post._id} post={post} />
    ))}
  </div>
  <CommentForm postId={post._id} /> 
  </Fragment>;
};

export default Posts