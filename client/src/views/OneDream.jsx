import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import jwt from 'jwt-decode'
// import Dream from '../components/Dream'

const OneDream = (props) => {

  const { id } = useParams();
  const nav = useNavigate();

  const [dream, setDream] = useState(null);
  // const [flag, setFlag] = useState(false);

  const [comment, setComment] = useState("")
  const [dreamComments, setDreamComments] = useState([]);

  // useEffect to get User
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const user = jwt(token)
      if (user) {
        // console.log(user)
        props.setLoggedInUser(user.username)
      } else {
        localStorage.removeItem('token')
      }
    }
  }, [])

  // useEffect to get one individual dream
  useEffect(() => {
    axios.get(`http://localhost:8000/api/dreams/${id}`)
      .then(res => {
        // console.log(res.data)
        setDream(res.data)
        setDreamComments(res.data.comments)
        // setFlag(true)
      })
      .catch(err => console.log(err))
  }, [])

  const logoutAction = () => {
    localStorage.removeItem('token')
    props.setLoggedInUser(null)
  }

  const commentSubmit = (e) => {
    e.preventDefault();

    const commentObj = {
      poster: props.loggedInUser,
      text: comment
    }

    dreamComments.push(commentObj);

    axios.put(`http://localhost:8000/api/dreams/${id}`, { comments: dreamComments })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log("ERROR", err))

    setComment("");
  }

  return (
    <div>
      {dream ? <div>
        <div className='d-flex justify-content-between align-items-center'>
          <h1 className='text-center' onClick={() => nav('/')}>Dream<span style={{ 'color': 'mediumpurple' }}>ZZZ</span></h1>
          {props.loggedInUser ?
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Welcome, {props.loggedInUser}
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><button className="dropdown-item" onClick={() => nav('/')} style={{ 'color': '#FFD700' }}>All Dreams</button></li>
                <li><button onClick={() => nav('/new/dream')} className="dropdown-item" style={{ 'color': '#32de84' }}>New Dream</button></li>
                <li><Link to={`/dreams/${props.loggedInUser}`} className="dropdown-item" style={{ 'color': '#EE82EE', 'textDecoration': 'none' }}>My Dreams</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><button onClick={() => logoutAction()} className="dropdown-item text-danger">Log Out</button></li>
              </ul>
            </div>
            :
            <button className='btn btn-sm btn-outline-light' onClick={() => nav('/auth')}>Log In/Register</button>}
        </div>

        <hr className='mt-4 mb-5' />

        <div className='d-flex align-items-center flex-column'>
          <div className='card mb-4' style={{ 'width': '80%', 'backgroundColor': 'rebeccapurple' }}>
            <div className='card-body'>
              <h4 className='card-title'>{dream.title}</h4>
              <h6 className="card-subtitle mb-4 text-light" style={{'fontSize':'.97em'}}>Posted by: {dream.poster}</h6>

              <p style={{ 'fontSize': '1.15em' }} className="card-text text-center mb-4"><em>{dream.content}</em></p>

              <div className='d-flex justify-content-end'>
                {dream.visibility === "Private" ? <></> : dream.likes.length - dream.dislikes.length >= 0 ? <p>Dream Rating: <span style={{'color':'green', 'marginLeft':'7px'}}>{dream.likes.length - dream.dislikes.length}</span></p> : <p>Dream Rating: <span style={{'color':'red', 'marginLeft':'7px'}}>{dream.likes.length - dream.dislikes.length}</span></p>
                }
              </div>
            </div>
          </div>
        </div>

        <hr />

        <h2>Comments - </h2>

        {props.loggedInUser ?
          <div>
            <form className='mb-4' onSubmit={commentSubmit}>
              <div className='mt-3 mb-3'>
                <label className='form-label'>Add a Comment:</label>
                <input value={comment} onChange={e => setComment(e.target.value)} className='form-control w-75' required />
              </div>
              <button className='btn btn-success'>Send Comment</button>
            </form>
            <hr className='mb-4' />
          </div>
          :
          <>
            <div className='d-flex justify-content-center align-items-center'>
              <button className='btn btn-outline-light mb-5' onClick={() => nav('/auth')}>Login or Register to Leave a Comment</button>
            </div>
          </>}

        {dreamComments.map((oneComment, i) =>
          <div key={i} className='mb-4' style={{ 'border': '2px solid mediumpurple', 'borderRadius': '10px' }}>
            <div style={{ 'padding': '10px' }}>
              <p>{oneComment.poster} says...</p>
              <p><b>{oneComment.text}</b></p>
            </div>
          </div>
        )}
      </div>
        : <><h1 style={{'height':'100vh', 'width':'100%', 'display':'flex', 'justifyContent':'center', 'alignItems':'center'}}>loading...</h1></>}
    </div>
  )
}

export default OneDream