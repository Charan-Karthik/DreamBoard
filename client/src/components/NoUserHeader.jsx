import React from 'react'
import { useNavigate } from 'react-router-dom'

const NoUserHeader = () => {

    const nav = useNavigate();

    return (
        <div>
            <div className='d-flex justify-content-between align-items-center'>
                <h1 className='text-center' onClick={() => nav('/')}>Dream<span style={{ 'color': 'mediumpurple' }}>ZZZ</span></h1>
                <button className='btn btn-sm btn-outline-light' onClick={() => nav('/')}>View All Shared Dreams</button>
            </div>
            
            <hr className='mt-4 mb-5' />
        </div>
    )
}

export default NoUserHeader