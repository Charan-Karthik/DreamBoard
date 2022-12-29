import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const nav = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState(null);

    const login = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/users/login', {
            email,
            password
        })
            .then(res => {
                localStorage.setItem('token', res.data.user)
                nav('/')
            })
            .catch(err => {
                setErrors("Incorrect email and/or password")
            })
    }

    return (
        <div>
            <div className='d-flex justify-content-center'>
                <form className='w-50 d-flex flex-column' onSubmit={login}>
                    <h1 className='text-center'>Log In</h1>

                    {errors ? <div className='alert alert-danger d-flex align-items-center justify-content-center flex-column'>
                        <p className='text-center'>{errors}</p>
                    </div> : <></>}

                    <div className="mb-3">
                        <label className='form-label'>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </div>

                    <div className="mb-3">
                        <label className='form-label'>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </div>

                    <div className="d-grid mb-3">
                        <input type="submit" className="btn btn-primary" value="Log In" />
                    </div>

                    <p className='text-center'>
                        <Link style={{ 'color': 'whitesmoke' }} to={'/register'}>Don't have an account?</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login