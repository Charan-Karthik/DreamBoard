import React from 'react'
import { Link } from 'react-router-dom'
import NoUserHeader from '../components/NoUserHeader'

const Login = () => {
    return (
        <div>
            <NoUserHeader />

            <form>
                <h3>Log In</h3>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
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
                <p>
                    Don't have an account?  
                    <Link to={'/login'}>Register</Link>
                </p>
            </form>
        </div>
    )
}

export default Login