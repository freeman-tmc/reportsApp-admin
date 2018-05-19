import React from 'react'
import { Link } from 'react-router-dom'


const LandingPage = (props) => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <h1 className="navbar-brand">Landing Page</h1>
                    <button className="btn btn-outline-success my-2 my-sm-0">
                        <Link to="/reports">Log in</Link>
                    </button>
                </div>
            </nav> 
    )
}

export default LandingPage;