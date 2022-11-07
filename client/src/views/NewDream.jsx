import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import jwt from 'jwt-decode'
import axios from 'axios'

const NewDream = (props) => {

    const nav = useNavigate();

    // useEffect to get User
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt(token)
            if (user) {
                console.log(user)
                props.setLoggedInUser(user.username)
                setPoster(user.username)
            } else {
                localStorage.removeItem('token')
            }
        }
    }, [])

    const [poster, setPoster] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [visibility, setVisibility] = useState("Public");

    const [errors, setErrors] = useState(null)

    const logoutAction = () => {
        localStorage.removeItem('token')
        props.setLoggedInUser(null)
        nav('/')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/dreams', {
            poster,
            title,
            content,
            visibility
        })
            .then(res => {
                console.log('SUCCESS', res)
                nav('/')
            })
            .catch(err => {
                console.log('ERROR', err)

                const errorResponse = err.response.data.errors;
                const errorArr = [];

                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }

                setErrors(errorArr);
            })
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
                        {/* <li><button onClick={() => nav('/new/dream')} className="dropdown-item" style={{ 'color': '#32de84' }}>New Dream</button></li> */}
                        <li><Link to={`/dreams/${props.loggedInUser}`} className="dropdown-item" style={{ 'color': '#EE82EE', 'textDecoration': 'none' }}>My Dreams</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><button onClick={() => logoutAction()} className="dropdown-item text-danger">Log Out</button></li>
                    </ul>
                </div>
            </div>

            <hr className='mt-4' />

            <h1 className='text-center'>What <span style={{ 'color': 'mediumpurple' }}>dream</span> would you like to share?</h1>

            <br />

            <form onSubmit={handleSubmit} className='d-flex flex-column align-items-center justify-content-center'>

                {errors ? <div className='alert alert-danger d-flex align-items-center justify-content-center flex-column'>{errors.map((err, index) => <p className='text-center' key={index}>{err}</p>)}</div> : <></>}

                <div className='mb-3' style={{ 'width': '30vw' }}>
                    <label className='form-label'>Dream Title:</label>
                    <input value={title} onChange={e => setTitle(e.target.value)} className='form-control' />
                </div>

                <div className='mb-3' style={{ 'width': '30vw' }}>
                    <label className='form-label'>Dream Content:</label>
                    <textarea onChange={e => setContent(e.target.value)} className='form-control'></textarea>
                </div>

                <div className='mb-3' style={{ 'width': '30vw' }}>
                    <label className='form-label'>Dream Visibility:</label>
                    <select className='form-select' onChange={e => setVisibility(e.target.value)}>
                        <option value="Public">Public</option>
                        <option value="Private">Private</option>
                    </select>
                </div>

                <button type='submit' className='btn btn-primary'>Submit Dream</button>
            </form>
        </div>
    )
}

export default NewDream