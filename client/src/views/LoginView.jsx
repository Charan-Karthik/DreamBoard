import React from 'react'
import NoUserHeader from '../components/NoUserHeader'
import Login from '../components/Login'

const LoginView = (props) => {

    return (
        <div>
            <NoUserHeader />

            <Login />
        </div>
    )
}

export default LoginView