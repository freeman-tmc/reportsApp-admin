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
            searchTerm: '',
            error: false,
            searchError: false
        };
    }

    componentDidMount() {
        getReports('http://localhost:3333/api/reports')
            .then(data => {
                this.setState({
                    reports: data,
                    filteredReports: data,
                    error: false
                })
            })
            .catch(() => {
                this.setState({
                    error: true
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

    searchReports = (event) => {
        let term = event.target.value.toLowerCase();
        let filteredList = this.state.reports.filter(el => {
            let candidate = el.candidateName.toLowerCase().includes(term);
            let company = el.companyName.toLowerCase().includes(term)
            return candidate || company;
        });
        this.setState({
            filteredReports: filteredList,
            searchTerm: term,
            searchError: !filteredList.length
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="main-container">
                    <Header />
                    {this.state.error ? <h1 className="error-info">Server error!</h1> :
                        <div className="container">
                            <input className="report-search" type="search" placeholder="Search" onChange={this.searchReports} value={this.state.searchTerm} />
                            {this.state.searchError
                                ? <h1 className="error-info">No results!</h1>
                                : <div id="reports-list">
                                    {this.state.filteredReports.map((el, i) => {
                                        return <ListItem {...el} removeReport={this.removeReport} key={i} />
                                    })}
                                </div>
                            }
                        </div>}
                    <div id="push"></div>
                </div>
                <Footer />
            </React.Fragment >
        )
    }
}

export default ReportListPage;