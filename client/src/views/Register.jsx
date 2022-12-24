import React from 'react'
import { Link } from 'react-router-dom'
import NoUserHeader from '../components/NoUserHeader'

const Register = () => {
    return (
        <div>
            <NoUserHeader />

            <form>
                <h3>Register</h3>
                <div className="mb-3">
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                    />
                </div>
                <div className="mb-3">
                    <label>Email</label>
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
                <div className="mb-3">
                    <label>Confirm Password</label>
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
                <p>
                    Already registered?  
                    <Link to={'/login'}>Log In</Link>
                </p>
            </form>
        </div>
    )
}

export default Register