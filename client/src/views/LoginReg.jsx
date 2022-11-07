import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const LoginReg = (props) => {

  const nav = useNavigate();

  const [username, setUsername] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [regErrors, setRegErrors] = useState(null);
  const [loginErrors, setLoginErrors] = useState(null);

  const register = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/users/register', {
      username,
      email: regEmail,
      password: regPassword,
      confirmPassword
    })
      .then(res => {
        console.log("SUCCESS", res.data)
      })
      .catch(err => {
        console.log('ERROR', err)

        const errorResponse = err.response.data.errors;
        const errorArr = [];

        if (errorResponse) {
          for (const key of Object.keys(errorResponse)) {
            errorArr.push(errorResponse[key].message)
          }
        }

        if (err.response.data.code === 11000) {
          errorArr.push("Email and/or Username is already in use")
        }

        setRegErrors(errorArr)
      })
  }

  const login = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/users/login', {
      email: loginEmail,
      password: loginPassword
    })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log("ERROR", err)
        setLoginErrors("Incorrect email and/or password")
      })
  }

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center'>
        <h1 className='text-center' onClick={() => nav('/')}>Dream<span style={{ 'color': 'mediumpurple' }}>ZZZ</span></h1>
        <button className='btn btn-sm btn-outline-light' onClick={() => nav('/')}>View All Shared Dreams</button>
      </div>

      <hr className='mb-5' />

      {/* <h3 className='text-center mb-5'>Log In or Register to Share your Dreams!</h3> */}

      <div className="d-flex justify-content-around mt-3">
        <form className="w-25 d-block mx-auto" onSubmit={register}>
          <h1>Register</h1>

          {regErrors ? <div className='alert alert-danger d-flex align-items-center justify-content-center flex-column'>
            {regErrors.map((err, index) => <p className='text-center' key={index}>{err}</p>)}
          </div> : <></>}

          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" className="form-control" onChange={(e) => { setUsername(e.target.value) }} />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" onChange={(e) => { setRegEmail(e.target.value) }} />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" onChange={(e) => { setRegPassword(e.target.value) }} />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-control" onChange={(e) => { setConfirmPassword(e.target.value) }} />
          </div>

          <input type="submit" className="btn btn-primary" value="Register" />
        </form>

        <form className="w-25 d-block mx-auto" onSubmit={login}>
          <h1>Log In</h1>

          {loginErrors ? <div className='alert alert-danger d-flex align-items-center justify-content-center flex-column'> <p className='text-center'>{loginErrors}</p> </div> : <></>}

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" onChange={(e) => { setLoginEmail(e.target.value) }} />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" onChange={(e) => { setLoginPassword(e.target.value) }} />
          </div>

          <input type="submit" className="btn btn-primary" value="Log In" />
        </form>
      </div>


      <br />
      <br />
      <br />

      <div className='mt-5'>
        <div className='d-flex justify-content-center'>
          <a href="https://www.paypal.com/donate/?business=XQPVNXAPA35XW&no_recurring=0&item_name=Support+the+further+development+of+DreamZZZ%21+%3A%29&currency_code=USD"
            className="btn" style={{ 'backgroundColor': 'mediumslateblue', 'color': 'white' }}>Support this Project!</a>
        </div>
      </div>
    </div>
  )
}

export default LoginReg