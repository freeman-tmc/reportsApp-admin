import React from 'react';

const SelectionPreview = (props) => {
    
    return (
        <div className="preview">
            <p className="field">Candidate</p>
            <p className="data">{props.candidate.name}</p>
            {props.company.name
                ? <p className="field">Company</p> : ''}
            <p className="data">{props.company.name}</p>
        </div>
    )
}

export default SelectionPreview;