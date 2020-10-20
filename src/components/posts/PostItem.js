import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment' // adjusting the date
import { connect } from 'react-redux' //add like, remove like, delete post
import { addLike, removeLike } from '../../actions/post';

const PostItem = ({ addLike, removeLike, auth, post: { _id, text, name, avatar, user, likes, comments, date }
}) => <div class="post bg-white p-1 my-1">
    <div>
      <Link to="profile.html">
        <img
          class="round-img"
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
          alt=""
        />
        <h4>John Doe</h4>
      </Link>
    </div>
    <div>
      <p class="my-1">
      {text}
      </p>
       <p class="post-date">
          Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>
      <button onClick={e => addLike(_id)} type="button" class="btn btn-light">
        <i class="fas fa-thumbs-up"></i>{' '}
        <span>{likes.length > 0 && (
          <span>{likes.length}</span>
        )}</span>
        <span>4</span>
      </button>
      <button onClick={e => removeLike(_id)} type="button" class="btn btn-light">
        <i class="fas fa-thumbs-down"></i>
      </button>
      <Link to={`/post/$_id`} class="btn btn-primary">
        Discussion{' '}
        {comments.length > 0 && (
          <span class='comment-count'>{comments.length}</span>
        )}
      </Link>
      {!auth.loading && user === auth.user._id && (
         <button      
      type="button"
      class="btn btn-danger"
    ></button>
      )}
    </div> 
  </div>


export default PostItem
