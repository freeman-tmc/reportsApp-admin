import React, { Component } from 'react';
import { getCandidates } from '../../../services/reportsService';


class ListOfCompanies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            companies: [],
            filteredCompanies: [],
            classesArray: [],
            selectCompany: {},
            buttonDisabled: true,
            inputValue: ''
        }
    }

    componentDidMount() {
        getCandidates('http://localhost:3333/api/companies')
            .then(data => {
                // new list with data.length empty strings
                let newArray = data.map(el => {
                    return '';
                })
                this.setState({
                    companies: data,
                    filteredCompanies: data,
                    classArray: newArray
                })
            })
    }

    selectCompany = (event) => {
        // collects element position in condidates list
        // element's id is equal to elements index in candidates list 
        var j = parseInt(event.currentTarget.id, 10);
        var changedArray = this.state.classArray.map((el, i) => {
            // changes selelected element class name
            return i === j ? 'selected' : '';
        });
        this.setState({
            classesArray: changedArray,
            selectedCompany: this.state.filteredCompanies[j],
            buttonDisabled: false
        })
    }

    searchCompanies = (event) => {
        let searchString = event.target.value;
        let filteredList = this.state.companies.filter(el => {
            return el.name.toLowerCase().includes(searchString);
        })
        this.setState({
            filteredCompanies: filteredList,
            inputValue: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <div className="clear">
                    <input className="candidates-search" type="search" placeholder='Search' onChange={this.searchCompanies} value={this.state.inputValue} />
                </div>
                <div className="list">
                    {this.state.filteredCompanies.map((el, i) => {
                        return (

                            <div className={this.state.classesArray[i] + ' company'} onClick={this.selectCompany} key={i} id={i}>
                                <p>{el.name}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="buttons">
                    <button id="back" onClick={() => this.props.backButton('candidates')}>Back</button>
                    <button id="next" disabled={this.state.buttonDisabled} onClick={() => this.props.nextButton('report submit', '', this.state.selectedCompany)}>Next</button>
                </div>
            </div>

        )
    }
}

export default ListOfCompanies; 