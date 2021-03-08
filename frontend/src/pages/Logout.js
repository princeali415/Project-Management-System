import React from 'react'
import {useHistory} from 'react-router-dom'

export default function Logout() {

    const history = useHistory();

    const goHome = () => {
        history.push("/")
    }

    return (
        <div>
            <h1>Succesfully Logged Out!</h1>
            <button onClick={goHome}>Go To Login</button>
        </div>
    )
}
