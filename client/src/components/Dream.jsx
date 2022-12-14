import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Dream = ({ info, loggedInUser }) => {

  const nav = useNavigate();

  const [postLikes, setPostLikes] = useState(info.likes);
  const [postDislikes, setPostDislikes] = useState(info.dislikes);

  const likeAction = () => {
    postLikes.push(loggedInUser)
    setPostLikes(postLikes)

    let tempDislikesArray
    if (postDislikes.includes(loggedInUser)) {
      tempDislikesArray = postDislikes.filter(dislike => dislike !== loggedInUser)
      setPostDislikes(tempDislikesArray)
    }

    // axios put request to update database
    axios.put(`http://localhost:8000/api/dreams/${info._id}`, {
      likes: postLikes,
      dislikes: tempDislikesArray
    })
      .then(res => console.log(res.data))
      .catch(err => console.log("ERROR", err))

    nav('/')
  }

  const dislikeAction = () => {
    postDislikes.push(loggedInUser)
    setPostDislikes(postDislikes)

    let tempLikesArray
    if (postLikes.includes(loggedInUser)) {
      tempLikesArray = postLikes.filter(like => like !== loggedInUser)
      setPostLikes(tempLikesArray)
    }

    // axios put request to update database

    axios.put(`http://localhost:8000/api/dreams/${info._id}`, {
      likes: tempLikesArray,
      dislikes: postDislikes
    })
      .then(res => console.log(res.data))
      .catch(err => console.log("ERROR", err))

    nav('/')
  }

  const undoLike = () => {
    let unLikeArr = postLikes.filter(like => like !== loggedInUser)
    setPostLikes(unLikeArr);

    // axios put request to update database
    axios.put(`http://localhost:8000/api/dreams/${info._id}`, {
      likes: unLikeArr
    })
      .then(res => console.log(res.data))
      .catch(err => console.log("ERROR", err))

    nav('/')
  }

  const undoDislike = () => {
    let unDislikeArr = postDislikes.filter(dislike => dislike !== loggedInUser)
    setPostDislikes(unDislikeArr);

    // axios put request to update database
    axios.put(``, {
      dislikes: unDislikeArr
    })
      .then(res => console.log(res.data))
      .catch(err => console.log("ERROR", err))

    nav('/')
  }

  return (
    <div className='d-flex align-items-center flex-column'>
      <div className='card mb-4' style={{ 'width': '50%', 'backgroundColor': 'rebeccapurple' }}>
        <div className='card-body'>
          <h4 className='card-title'><b>{info.title}</b></h4>
          <h6 className="card-subtitle mb-3 text-light" style={{'fontSize':'.9em'}}>Posted by: {info.poster}</h6>
          <p style={{ 'fontSize': '1.01em' }} className="card-text text-center mb-4"><em>{info.content}</em></p>

          <div className='d-flex justify-content-around'>
            {/* <p style={{ 'marginTop': '15px' }}>View Dream</p> */}
            <Link style={{ 'marginTop': '15px', 'textDecoration': 'none', 'color': 'white' }} to={`/dream/${info._id}`}><u>View Dream</u></Link>

            <p style={{ 'marginTop': '15px' }}>Comments: {info.comments.length}</p>

            <div className='d-flex gap-4 align-items-center justify-content-center'>

              {loggedInUser ? loggedInUser === info.poster ? <></> : postLikes.includes(loggedInUser) ? <button onClick={undoLike} className='btn btn-sm btn-success'>ᐱ</button> : <button onClick={likeAction} className='btn btn-sm btn-outline-success'>ᐱ</button> : <></>}

              {postLikes.length - postDislikes.length >= 0 ?
                <p style={{ 'marginTop': '15px', 'color': 'green' }}>{postLikes.length - postDislikes.length}</p>
                :
                <p style={{ 'marginTop': '15px', 'color': 'red' }}>{postLikes.length - postDislikes.length}</p>
              }

              {loggedInUser ? loggedInUser === info.poster ? <></> : postDislikes.includes(loggedInUser) ? <button onClick={undoDislike} className='btn btn-sm btn-danger'>ᐯ</button> : <button onClick={dislikeAction} className='btn btn-sm btn-outline-danger'>ᐯ</button> : <></>}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dream