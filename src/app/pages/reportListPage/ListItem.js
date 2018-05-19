import React, { Component } from 'react'
import Modal from './Modal'

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    openModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    closeModal = (event) => {
        let modal = document.querySelector('.modal');
        let close = document.querySelector('.close');
        if (event.target === modal || event.target === close) {
            this.setState({
                showModal: !this.state.showModal
            })
        }
    }

    render() {
        return (
            <div className="report">
                <div className="column">
                    <p>{this.props.companyName}</p>
                    <p className="caption">Company</p>
                </div>
                <div className="column">
                    <p>{this.props.candidateName}</p>
                    <p className="caption">Candidate</p>
                </div>
                <div className="column">
                    <p>{this.props.interviewDate}</p>
                    <p className="caption">Interview Date</p>
                </div>
                <div className="column">
                    <p>{this.props.status}</p>
                    <p className="caption">Status</p>
                </div>
                <div className="column">
                    <img src="./img/eye.svg" className="show-modal" onClick={this.openModal} alt="" />
                    <button className="delete-report">x</button>
                </div>
                {this.state.showModal ? <Modal {...this.props} handleClick={this.closeModal} /> : ''}
            </div>
        )
    }
}

export default ListItem;