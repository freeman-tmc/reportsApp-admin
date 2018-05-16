import React from 'react';

const SelectionPreview = (props) => {
    
    return (
        <div>
            <p>Candidate</p>
            <p>{props.candidate.name}</p>
            <p>Company</p>
            <p>{props.company.name}</p>
        </div>
    )
}

export default SelectionPreview;