import React, { Component } from 'react';
import { getCandidates } from '../../../services/reportsService';


class ListOfCandidates extends Component {

    constructor(props) {
        super(props);
        this.state = {
            candidates: [],
            filteredCandidates: [],
            classesArray: [],
            selectedCandidate: {},
            buttonDisabled: true,
            inputValue: ''
        }
    }

    componentDidMount() {
        getCandidates('http://localhost:3333/api/candidates')
            .then(data => {
                // new list with data.length empty strings
                let newArray = data.map(el => {
                    return '';
                })
                this.setState({
                    candidates: data,
                    filteredCandidates: data,
                    classArray: newArray
                })
            })
    }

    selectCandidate = (event) => {
        // collects element position in condidates list
        // element's id is equal to elements index in candidates list 
        let j = parseInt(event.currentTarget.id, 10);
        let changedArray = this.state.classArray.map((el, i) => {
            // changes selelected element class name
            return i === j ? 'selected' : '';
        });
        this.setState({
            classesArray: changedArray,
            selectedCandidate: this.state.filteredCandidates[j],
            buttonDisabled: false
        })
    }

    searchCandidates = (event) => {
        let searchString = event.target.value;
        let filteredList = this.state.candidates.filter(el => {
            return el.name.toLowerCase().includes(searchString);
        })
        this.setState({
            filteredCandidates: filteredList,
            inputValue: event.target.value,
        })
    }

    render() {
        return (
            <div>
                <input type="text" placeholder='Search'  onChange={this.searchCandidates} />
                {this.state.filteredCandidates.map((el, i) => {
                    return (

                        <div className={this.state.classesArray[i]} onClick={this.selectCandidate} key={i} id={i}>
                            <img src={el.avatar} alt="" />
                            <p>{el.name}</p>
                            <p>{el.email}</p>
                        </div>
                    )
                })}
                <button disabled={this.state.buttonDisabled} onClick={() => this.props.nextButton('companies', this.state.selectedCandidate, '')}>Next</button>
            </div>

        )
    }
}

export default ListOfCandidates;