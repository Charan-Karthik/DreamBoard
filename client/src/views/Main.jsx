import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Main = (props) => {
    
    const nav = useNavigate();
    
    return (
        <div>
            <div className='d-flex justify-content-between align-items-center'>
                <h1 className='text-center'>Dream<span style={{'color':'MediumPurple'}}>ZZZ</span></h1>
                <button className='btn btn-sm btn-outline-light' onClick={() => nav('/loginreg')}>Log In/Register</button>
            </div>

            <hr />

            <button className='btn btn-info' onClick={() => nav('/new/dream')}>Click Here to Share a Dream</button>
        </div>
    )
}

export default Main