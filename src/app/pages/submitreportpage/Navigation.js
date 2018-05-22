import React from 'react';

const Navigation = (props) => {
    return (
        <div className="navigation">
            <p className={props.display === 'candidates' ? 'active' : ''}><span>1</span>Select candidate</p>
            <p className={props.display === 'companies' ? 'active' : ''}><span>2</span>Select Company</p>
            <p className={props.display === 'report submit' ? 'active' : ''}><span>3</span>Fill Report Detail</p>  
        </div>
    )
}

export default Navigation;