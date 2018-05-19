import React from 'react'

const Modal = (props) => {
    
    return (
        <div className="modal" onClick={props.handleClick}>
            <div className="modal-content">
                <div className="modal-header">
                    <h1>{props.candidateName}</h1>
                    <button className="close">&times;</button>
                </div>
                <div>
                    <p>Company</p>
                    <p className="candidate-info">{props.companyName}</p>
                    <p>Interview Date</p>
                    <p className="candidate-info">{props.interviewDate}</p>
                    <p>Phase</p>
                    <p className="candidate-info">{props.phase}</p>
                    <p>Status</p>
                    <p className="candidate-info">{props.status}</p>
                </div>
                <div>
                    <p>Notes</p>
                    <p className="candidate-note">{props.note}</p>
                </div>
            </div >
        </div >
    )
}

export default Modal;