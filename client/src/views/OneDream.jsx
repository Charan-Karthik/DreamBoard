import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import jwt from 'jwt-decode'

const OneDream = (props) => {

  const { id } = useParams();
  const nav = useNavigate();

  const [dream, setDream] = useState({});

  // useEffect to get User
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const user = jwt(token)
      if (user) {
        console.log(user)
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
        console.log(res.data)
        setDream(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const logoutAction = () => {
    localStorage.removeItem('token')
    props.setLoggedInUser(null)
  }

  return (
    <div>
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

      <hr />

      {JSON.stringify(dream)}
    </div>
  )
}

export default OneDream