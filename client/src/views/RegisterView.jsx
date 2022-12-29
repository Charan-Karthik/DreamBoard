import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NoUserHeader from '../components/NoUserHeader'

const RegisterView = (props) => {

    const nav = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errors, setErrors] = useState(null);

    const register = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/users/register', {
            username,
            email,
            password,
            confirmPassword
        })
            .then(res => {
                localStorage.setItem('token', res.data.user)
                nav('/')
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArray = [];

                if (errorResponse) {
                    for (const key of Object.keys(errorResponse)) {
                        errorArray.push(errorResponse[key].message)
                    }
                }

                if (err.response.data.code === 11000) {
                    errorArray.push("Email and/or Username is already in use")
                }

                setErrors(errorArray);
            })
    }

    return (
        <div>
            <NoUserHeader />

            <div className='d-flex justify-content-center'>
                <form className='w-50 d-flex flex-column' onSubmit={register}>
                    <h1 className='text-center'>Register</h1>

                    {errors ? <div className='alert alert-danger d-flex align-items-center justify-content-center flex-column'>
                        {errors.map((err, index) => <p className='text-center' key={index}>{err}</p>)}
                    </div> : <></>}

                    <div className="mb-3">
                        <label className='form-label'>Username</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter username"
                            onChange={(e) => { setUsername(e.target.value) }}
                        />
                    </div>

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

                    <div className="mb-3">
                        <label className='form-label'>Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm password"
                            onChange={(e) => { setConfirmPassword(e.target.value) }}
                        />
                    </div>

                    <div className="d-grid mb-3">
                        <input type='submit' className='btn btn-primary' value='Register' />
                    </div>

                    <p className='text-center'>
                        <Link style={{ 'color': 'whitesmoke' }} to={'/login'}>Already registered?</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default RegisterView