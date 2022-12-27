import React from 'react'
import { Link } from 'react-router-dom'
import NoUserHeader from '../components/NoUserHeader'

const Register = () => {
    return (
        <div>
            <NoUserHeader />
            <div className='d-flex justify-content-center'>
                <form className='w-50 d-flex flex-column'>
                    <h1 className='text-center'>Register</h1>

                    <div className="mb-3">
                        <label className='form-label'>Username</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter username"
                        />
                    </div>

                    <div className="mb-3">
                        <label className='form-label'>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                        />
                    </div>

                    <div className="mb-3">
                        <label className='form-label'>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                        />
                    </div>

                    <div className="mb-3">
                        <label className='form-label'>Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm password"
                        />
                    </div>

                    <div className="d-grid mb-3">
                        <button type="submit" className="btn btn-primary">
                            Register
                        </button>
                    </div>

                    <p className='text-center'>
                        <Link style={{ 'color': 'whitesmoke' }} to={'/login'}>Already registered?</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Register