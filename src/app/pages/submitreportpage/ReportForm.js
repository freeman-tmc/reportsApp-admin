import React, { Component } from 'react';

class ReportForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dateInput: '',
            phaseInput: '',
            statusInput: '',
            noteInput: '',
            disableSubmit: false,
            dateError: false,
        }
    }

    handleChange = (event) => {

        switch (event.target.name) {

            case 'date':
                let enteredDate = new Date(event.target.value).getTime();
                let currentTime = new Date().getTime();
                let dateCheck = currentTime < enteredDate;
                this.setState({
                    dateInput: event.target.value,
                    dateError: dateCheck,
                    disableSubmit: !!(event.target.value && this.state.phaseInput && this.state.statusInput && this.state.noteInput && !dateCheck)
                })
                break;

            case 'phase':
                this.setState({
                    phaseInput: event.target.value,
                    disableSubmit: !!(this.state.dateInput && event.target.value && this.state.statusInput && this.state.noteInput && !dateCheck)
                })
                break;

            case 'status':
                this.setState({
                    statusInput: event.target.value,
                    disableSubmit: !!(this.state.dateInput && this.state.phaseInput && event.target.value && this.state.noteInput && !dateCheck)
                })
                break;

            case 'note':
                this.setState({
                    noteInput: event.target.value,
                    disableSubmit: !!(this.state.dateInput && this.state.phaseInput && this.state.statusInput && event.target.value && !dateCheck)
                })
                break;

            default:
        }
    }


    render() {

        return (
            <div>
                <div className="list">
                    <p id="instruction">All fields are required!</p>
                    <div className="input-field">
                        <p>Interview Date:</p>
                        <input id="date" type="date" name="date" onChange={this.handleChange} />
                        <p id="error">{this.state.dateError ? 'Please enter valid date!' : ''}</p>
                    </div>
                    <div className="input-field">
                        <p>Phase:</p>
                        <select id="phase" name="phase" onChange={this.handleChange}>
                            <option value="">Select</option>
                            <option value="technical">Technical</option>
                            <option value="cv">CV</option>
                            <option value="hr">HR</option>
                            <option value="final">Final</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <p>Status:</p>
                        <select id="status" name="status" onChange={this.handleChange}>
                            <option value="">Select</option>
                            <option value="passed">Passed</option>
                            <option value="declined">Declined</option>
                        </select>
                    </div>
                    <label>
                        Notes:
                        <textarea id="note" name="note" cols="30" rows="10" placeholder="Enter notes" value={this.state.noteInput} onChange={this.handleChange} ></textarea>
                    </label>
                </div>
                <div className="buttons">
                    <button id="back" onClick={() => this.props.backButton('companies')}>Back</button>
                    <button id="submit" onClick={() => this.props.submitButton(this.state)} disabled={!this.state.disableSubmit}>Submit</button>
                </div>
            </div>
        )

    }

}

export default ReportForm;