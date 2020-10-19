import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import Spinner from '../layout/Spinner'
import PostItem from './PostItem'

const Posts = ({ getPosts, post: { posts, loading }}) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? <Spinner /> : <Fragment>test
  <h1 className="large text-primary">Posts</h1>
   <p className="lead">
    <i className="fas fa-user">Welcome to the community</i>
  </p>
  {/* PostForm */}
  <div>
    {posts.map(post => (
      <PostItem key={post._id} post={post} />
    ))}
  </div>
  </Fragment>;
};

export default Posts