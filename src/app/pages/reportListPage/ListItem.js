import React, { Component } from 'react'
import Modal from './Modal'

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    openModal = (event) => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    closeModal = (event) => {
        let modal = document.querySelector('.modal');
        let close = document.querySelector('#close');
        if (event.target === modal || event.target === close) {
            this.setState({
                showModal: !this.state.showModal
            })
        }
    }

    render() {
        return (
            <div>
                <div className="column">
                    <p>{this.props.companyName}</p>
                    <p>Company</p>
                </div>
                <div className="column">
                    <p>{this.props.candidateName}</p>
                    <p>Candidate</p>
                </div>
                <div className="column">
                    <p>{this.props.interviewDate}</p>
                    <p>Interview Date</p>
                </div>
                <div className="column">
                    <p>{this.props.status}</p>
                    <p>Status</p>
                </div>
                <div className="column">
                    <p onClick={this.openModal}>eye</p>
                    <p>x</p>
                </div>
                {this.state.showModal ? <Modal {...this.props} handleClick={this.closeModal} /> : ''}
            </div>
        )
    }
}

export default ListItem;