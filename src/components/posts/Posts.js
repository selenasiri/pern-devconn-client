import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux';
import { getPosts } fom '../../actions/post';
import Spinner from '../layout/Spinner'


const Posts = ({ getPosts, post: { posts, loading }}) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  
  return (
    <div>
      
    </div>
  )
}


export default Posts