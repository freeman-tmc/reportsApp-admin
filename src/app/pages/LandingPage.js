import React from 'react'
import { Link } from 'react-router-dom'


const LandingPage = (props) => {
    return (
        <nav className="nav">
            <div className="container">
                <h1>Landing Page</h1>
                <div className="links">
                    <button>
                        <Link to="/reports">Log in</Link>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default LandingPage;