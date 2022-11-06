import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginReg = (props) => {

  const nav = useNavigate();

  const [username, setUsername] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [regErrors, setRegErrors] = useState([]);
  const [loginErrors, setLoginErrors] = useState([]);

  const register = (e) => {
    e.preventDefault()
  }

  const login = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      {/* OLD VERSION */}
      {/* <h1 className='text-center text-light mb-4'>Dream<span style={{ 'color': 'mediumpurple' }}>ZZZ</span></h1>

      <div className='d-flex justify-content-center flex-column align-items-center gap-2'>
        <h3>Log In or Register to Share your Thoughts!</h3>
        <Link to={'/'}><span style={{'color':'white', 'textDecoration':'none'}}>View all Shared Dreams</span></Link>
        <button className='btn btn-sm btn-outline-light' onClick={() => nav('/')}>View All Shared Dreams</button>
      </div> */}

      <div className='d-flex justify-content-between align-items-center'>
        <h1 className='text-center mb-4'>Dream<span style={{ 'color': 'mediumpurple' }}>ZZZ</span></h1>
        <button className='btn btn-sm btn-outline-light' onClick={() => nav('/')}>View All Shared Dreams</button>
      </div>

      <hr className='mt-3 mb-4' />

      <h3 className='text-center mb-5'>Log In or Register to Share your Dreams!</h3>

      <div className="d-flex justify-content-around mt-3">
        <form className="w-25 d-block mx-auto" onSubmit={register}>
          <h1>Register</h1>

          {regErrors.map((err, index) => <p style={{ 'color': 'red' }} key={index}>{err}</p>)}

          <div className="mb-3">
            <label className="form-label">Username</label>
            <input name="username" type="text" className="form-control" onChange={(e) => { setUsername(e.target.value) }} />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input name="email" type="email" className="form-control" onChange={(e) => { setRegEmail(e.target.value) }} />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input name="password" type="password" className="form-control" onChange={(e) => { setRegPassword(e.target.value) }} />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input name="confirm_password" type="password" className="form-control" onChange={(e) => { setConfirmPassword(e.target.value) }} />
          </div>

          <input type="submit" className="btn btn-primary" value="Register" />
        </form>

        <form className="w-25 d-block mx-auto" onSubmit={login}>
          <h1>Log In</h1>

          {loginErrors ? <p className='text-danger'>{loginErrors}</p> : <></>}

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input name="email" type="email" className="form-control" onChange={(e) => { setLoginEmail(e.target.value) }} />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input name="password" type="password" className="form-control" onChange={(e) => { setLoginPassword(e.target.value) }} />
          </div>

          <input type="submit" className="btn btn-primary" value="Log In" />
        </form>
      </div>

      {/* <div className='mt-5'>
        <div className='d-flex justify-content-center'>
          <a href="#"
            className="btn" style={{ 'backgroundColor': '#DDA0DD' }}>Support this Project!</a>
        </div>
      </div> */}
    </div>
  )
}

export default LoginReg