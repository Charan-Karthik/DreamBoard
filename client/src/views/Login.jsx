import React from 'react'
import { Link } from 'react-router-dom'
import NoUserHeader from '../components/NoUserHeader'

const Login = () => {
    return (
        <div>
            <NoUserHeader />

            <div className='d-flex justify-content-center'>
                <form className='w-50 d-flex flex-column'>
                    <h1 className='text-center'>Log In</h1>

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

                    <div className="d-grid mb-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
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