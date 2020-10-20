import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getPost } from '../../actions/post'
import {useParams} from 'react-router-dom'

// /posts/:id    --- e.g. /posts/2
const Post = ({ getPosts }) => {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  const { id } = useParams(); // id = 2

  useEffect(() => {
    getPost(id);
  }, [getPost, id]);

  return (
    <div>
      post
    </div>
  )
}

export default Post
