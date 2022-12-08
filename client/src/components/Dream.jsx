import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'

const Dream = ({ info, loggedInUser }) => {

  const [postLikes, setPostLikes] = useState(info.likes);
  const [postDislikes, setPostDislikes] = useState(info.dislikes);

  const likeAction = () => {
    postLikes.push(loggedInUser)
    setPostLikes(postLikes)

    let tempDislikesArray
    if (postDislikes.includes(loggedInUser)){
      tempDislikesArray = postDislikes.filter(dislike => dislike !== loggedInUser)
      setPostDislikes(tempDislikesArray)
    }

    // axios put request to update database
  }

  const dislikeAction = () => {
    postDislikes.push(loggedInUser)
    setPostDislikes(postDislikes)

    let tempLikesArray
    if (postLikes.includes(loggedInUser)){
      tempLikesArray = postLikes.filter(like => like !== loggedInUser)
      setPostLikes(tempLikesArray)
    }

    // axios put request to update database
  }

  const undoLike = () => {
    let unLikeArr = postLikes.filter(like => like !== loggedInUser)
    setPostLikes(unLikeArr);

    // axios put request to update database
  }

  const undoDislike = () => {
    let unDislikeArr = postDislikes.filter(dislike => dislike !== loggedInUser)
    setPostDislikes(unDislikeArr);

    // axios put request to update database
  }

  return (
    <div className='d-flex align-items-center flex-column'>
      <div className='card mb-4' style={{ 'width': '50%', 'backgroundColor': 'cornflowerblue' }}>
        <div className='card-body'>
          <h5 className='card-title'>{info.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{info.poster}</h6>
          <p style={{ 'fontSize': '1.01em' }} className="card-text"><em>{info.content}</em></p>

          <div className='d-flex justify-content-around'>
            {/* <p style={{ 'marginTop': '15px' }}>View Dream</p> */}
            <Link style={{ 'marginTop': '15px', 'textDecoration': 'none', 'color': 'white' }} to={`/dream/${info._id}`}>View Dream</Link>

            <p style={{ 'marginTop': '15px' }}>Comments: {info.comments.length}</p>

            <div className='d-flex gap-4 align-items-center justify-content-center'>
              <button className='btn btn-sm btn-outline-success'>ᐱ</button>
              <p style={{ 'marginTop': '15px' }}>{info.likes.length - info.dislikes.length}</p>
              <button className='btn btn-sm btn-outline-danger'>ᐯ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dream