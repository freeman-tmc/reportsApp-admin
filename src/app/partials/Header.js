import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {
    return (
        <header>
            <h1>Reports Administration</h1>
            <div id="links">
                <Link to="/reports">Reports</Link>
                <Link to="/createreport">Create Report</Link>
            </div>
        </header>
    )
}

export default Header;