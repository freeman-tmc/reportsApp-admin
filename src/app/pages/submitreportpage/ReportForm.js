import React, { Component } from 'react';

class ReportForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dateInput: '',
            phaseInput: '',
            statusInput: '',
            noteInput: '',
        }
    }

    handleChange = (event) => {

        switch (event.target.name) {
            case 'date':
                this.setState({
                    dateInput: event.target.value,
                })
                break;
            case 'phase':
                this.setState({
                    phaseInput: event.target.value,
                })
                break;
            case 'status':
                this.setState({
                    statusInput: event.target.value,
                })
                break;
            case 'note':
                this.setState({
                    noteInput: event.target.value,
                })
                break;
            default:
        }
    }


    render() {

        return (
            <div>
                <div className="list">
                    <input id="date" type="date" name="date" onChange={this.handleChange} />
                    <select id="phase" name="phase" value="technical" onChange={this.handleChange}>
                        <option value="technical">Technical</option>
                        <option value="cv">CV</option>
                        <option value="hr">HR</option>
                        <option value="final">Final</option>
                    </select>
                    <select id="status" name="status" value="" onChange={this.handleChange}>
                        <option value="">Select</option>
                        <option value="passed">Passed</option>
                        <option value="declined">Declined</option>
                    </select>
                    <label>
                        Notes:
                    <textarea id="note" name="note" cols="30" rows="10" placeholder="Enter notes" value={this.state.noteInput} onChange={this.handleChange} ></textarea>
                    </label>
                </div>
                <div className="buttons">
                    <button id="back" onClick={() => this.props.backButton('companies')}>Back</button>
                    <button id="submit" onClick={() => this.props.submitButton(this.state)} >Submit</button>
                </div>
            </div>
        )

    }

}

export default ReportForm;