import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import jwt from 'jwt-decode'
import axios from 'axios'

const DreamsByUser = (props) => {

    const nav = useNavigate();
    const { username } = useParams();
    const [allUserDreams, setAllUserDreams] = useState([]);

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

    // useEffect to get posts by username
    useEffect(() => {
        axios.get(`http://localhost:8000/api/dreams`)
            .then(res => {
                // console.log(res.data)
                const temp = res.data
                const dreamsByUser = temp.filter(dream => dream.poster === username)
                // console.log(dreamsByUser)
                setAllUserDreams(dreamsByUser)
            })
            .catch(err => console.log(err))
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

            <h2 className='text-center mb-3'>All of <span style={{ 'color': 'mediumpurple' }}>Your Dreams</span></h2>
            <table className="table table-dark table-striped table-bordered text-center">
                <thead>
                    <tr>
                        <th scope="col">Dream Title</th>
                        <th scope="col">Date</th>
                        <th scope="col">Visibility</th>
                    </tr>
                </thead>
                <tbody>
                    {allUserDreams.map(dream => 
                        <tr key={dream._id}>
                            <td><Link style={{'textDecoration':'none', 'color':'white'}} to={`/dream/${dream._id}`}><u>{dream.title}</u></Link></td>
                            <td>{dream.createdAt.slice(0,10)}</td>
                            <td>{dream.visibility}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default DreamsByUser