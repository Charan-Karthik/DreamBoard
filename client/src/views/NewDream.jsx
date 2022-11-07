import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewDream = () => {

    const nav = useNavigate();

    const [poster, setPoster] = useState(null);
    const [title, setTitle] = useState(null);
    const [content, setContent] = useState(null);
    const [visibility, setVisibility] = useState("Public");

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
                    <input value={content} onChange={e => setTitle(e.target.value)} className='form-control' />
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