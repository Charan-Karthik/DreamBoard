import React from 'react'
import { useParams } from 'react-router-dom'
import NoUserHeader from '../components/NoUserHeader'
import Login from '../components/Login'
import Register from '../components/Register'

const LoginReg = () => {

    const { action } = useParams();

    return (
        <div>
            <NoUserHeader />

        </div>
    )
}

export default LoginReg