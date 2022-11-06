import React from 'react'
import { useNavigate } from 'react-router-dom'

const NewDream = () => {

    const nav = useNavigate();

    return (
        <div>
            <div className='d-flex justify-content-between align-items-center'>
                <h1 className='text-center' onClick={() => nav('/')}>Dream<span style={{ 'color': 'mediumpurple' }}>ZZZ</span></h1>
                <button className='btn btn-sm btn-outline-light' onClick={() => nav('/')}>View All Shared Dreams</button>
            </div>

            <hr />

            <form>
                <div className='mb-3' style={{ 'width': '30vw' }}>
                    <label className='form-label'>Dream Title:</label>
                    <input className='form-control' />
                </div>

                <div className='mb-3' style={{ 'width': '30vw' }}>
                    <label className='form-label'>Dream Content:</label>
                    <textarea className='form-control'></textarea>
                </div>

                <div className='mb-3' style={{ 'width': '30vw' }}>
                    <label className='form-label'>Dream Visibility:</label>
                    <select className='form-select'>
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </select>
                </div>

                <button type='submit' className='btn btn-primary'>Submit Dream</button>
            </form>
        </div>
    )
}

export default NewDream