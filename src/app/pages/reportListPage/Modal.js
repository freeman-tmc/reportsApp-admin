import React from 'react'

const Modal = (props) => {
    
    return (
        <div className="modal" onClick={props.handleClick}>
            <div className="modal-content">
                <div className="modal-header">
                    <h1>{props.candidateName}</h1>
                    <button className="close">&times;</button>
                </div>
                <div className="report-data">
                    <p className="modal-field">Company</p>
                    <p className="candidate-info">{props.companyName}</p>
                    <p className="modal-field">Interview Date</p>
                    <p className="candidate-info">{props.interviewDate}</p>
                    <p className="modal-field">Phase</p>
                    <p className="candidate-info">{props.phase}</p>
                    <p className="modal-field">Status</p>
                    <p className="candidate-info">{props.status}</p>
                </div>
                <div className="report-note">
                    <p className="field">Notes</p>
                    <p className="candidate-note">{props.note}</p>
                </div>
            </div >
        </div >
    )
}

export default Modal;