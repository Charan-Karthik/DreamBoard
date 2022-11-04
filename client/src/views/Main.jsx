import React from 'react'
import { useNavigate } from 'react-router-dom'

const Main = (props) => {
    
    const nav = useNavigate();
    
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center flex-column'>
                <h1 className='text-center'>Dream<span style={{'color':'MediumPurple'}}>ZZZ</span></h1>
                <button className='btn btn-sm btn-outline-light' onClick={() => nav('/loginreg')}>Log In or Register to Share a Dream</button>
            </div>
        </div>
    )
}

export default Main