import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {

    return (
        <nav>
            <div className="container">
                <h1>Reports Administration</h1>
                <div className="links">
                    <button>
                        <Link to="/reports">Reports</Link>
                    </button>
                    <button>
                        <Link to="/createreport">Create Report</Link>
                    </button>
                </div>
            </div>
        </nav>
    )
    
}

export default Header;