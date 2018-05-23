import React from 'react'
import { Link ,withRouter} from 'react-router-dom'

const Header = (props) => {
    
    return (
        <nav>
            <div className="container">
                <h1>Reports Administration</h1>
                <div className="links">
                    <button>
                        <Link className={props.match.path === '/reports' ? 'active-location' : ''} to="/reports">Reports</Link>
                    </button>
                    <button>
                        <Link className={props.match.path === '/createreport' ? 'active-location' : ''} to="/createreport">Create Report</Link>
                    </button>
                </div>
            </div>
        </nav>
    )
    
}

export default withRouter(Header);