import React from 'react'
import Header from '../../partials/Header'
import Footer from '../../partials/Footer'
import ListItem from './ListItem';
import { getReports } from '../../../services/reportsService';
import { deleteReport } from '../../../services/reportsService';

class ReportListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reports: [],
            filteredReports: [],
            searchTerm: ''
        };
    }

    componentDidMount() {
        getReports('http://localhost:3333/api/reports')
            .then(data => {
                this.setState({
                    reports: data,
                    filteredReports: data
                })
            })

    }

    removeReport = (id) => {
        deleteReport(id)
            .then(response => {
                getReports('http://localhost:3333/api/reports')
                    .then(data => {
                        this.setState({
                            filteredReports: data
                        })
                    })
            })
    }

    filter = (event) => {
        let term = event.target.value.toLowerCase();
        let filteredList =  this.state.reports.filter(el => {
            let candidate = el.candidateName.toLowerCase().includes(term);
            let company = el.companyName.toLowerCase().includes(term)
            return candidate || company;
        });
        this.setState({
            filteredReports: filteredList,
            searchTerm: term
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="main-container">
                    <Header />
                    <div className="container">
                        <input className="report-search" type="search" placeholder="Search" onChange={this.filter} value={this.state.searchTerm} />
                        <div id="reports-list">
                            {this.state.filteredReports.map((el, i) => {
                                return <ListItem {...el} removeReport={this.removeReport} key={i} />
                            })}
                        </div>
                    </div>
                    <div id="push"></div>
                </div>
                <Footer />
            </React.Fragment >
        )
    }
}

export default ReportListPage;