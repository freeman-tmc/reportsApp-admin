import React from 'react'
import {Link} from 'react-router-dom'

const LandingPage = (props) => {
    return (
        <div>
            <h1>Landing page</h1>
            <Link to="/reports">Log in</Link>
        </div>
    )
}

export default LandingPage;