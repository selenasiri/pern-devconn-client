import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../layout/Spinner'
import PostItem from '../posts/PostItem'
import { getPost } from '../../actions/post'
import {useParams} from 'react-router-dom'

// /posts/:id    --- e.g. /posts/2
const Post = () => {
const {post, loading} = useSelector(state => state.post)
const dispatch = useDispatch()

  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  const { id } = useParams(); // id = 2

  useEffect(() => {
    dispatch(getPost(id));
  }, [getPost, id]);

  return loading || post === null ? <Spinner /> : 
  <Fragment>
    <Link to='/posts' className='btn'> 
     Back To Posts
    </Link>
    <PostItem post={post} showActions={false} /> 
  </Fragment>
}

export default Post
