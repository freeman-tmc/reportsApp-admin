import React from 'react'

const Modal = (props) => {
    return (
        <div className="modal" onClick={props.handleClick}>
            <div className="modal-box">
                <h1>Candidate Name<span id="close">x</span></h1>
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
            </div>
        </div>
    )
}

export default Modal;