import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import jwt from 'jwt-decode'

const DreamsByUser = (props) => {

    const nav = useNavigate();

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


    const logoutAction = () => {
        localStorage.removeItem('token')
        props.setLoggedInUser(null)
        nav('/')
    }

    return (
        <div>
            <div className='d-flex justify-content-between align-items-center'>
                <h1 className='text-center' onClick={() => nav('/')}>Dream<span style={{ 'color': 'mediumpurple' }}>ZZZ</span></h1>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Welcome, {props.loggedInUser}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                        <li><button className="dropdown-item" onClick={() => nav('/')} style={{ 'color': '#FFD700' }}>All Dreams</button></li>
                        <li><button onClick={() => nav('/new/dream')} className="dropdown-item" style={{ 'color': '#32de84' }}>New Dream</button></li>
                        {/* <li><Link to={`/dreams/${props.loggedInUser}`} className="dropdown-item" style={{ 'color': '#EE82EE', 'textDecoration': 'none' }}>My Dreams</Link></li> */}
                        <li><hr className="dropdown-divider" /></li>
                        <li><button onClick={() => logoutAction()} className="dropdown-item text-danger">Log Out</button></li>
                    </ul>
                </div>
            </div>

            <hr className='mt-4' />

            DreamsByUser
        </div>
    )
}

export default DreamsByUser