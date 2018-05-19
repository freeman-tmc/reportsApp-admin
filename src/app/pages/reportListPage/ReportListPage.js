import React from 'react'
import Header from '../../partials/Header'
import Footer from '../../partials/Footer'
import ListItem from './ListItem';
import { getReports } from '../../../services/reportsService';

class ReportListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reports: []
        };
    }

    componentDidMount() {
        getReports('http://localhost:3333/api/reports')
            .then(data => {
                this.setState({
                    reports: data
                })
            })

    }

    render() {
        return (
            <React.Fragment>
                <div className="main-container">
                    <Header />
                    <div className="container">
                        <input className="report-search" type="search" placeholder="Search" aria-label="Search" />
                        {/* <input type="text" placeholder="Search" /> */}
                        <div id="reports-list">
                            {this.state.reports.map((el, i) => {
                                return <ListItem {...el} key={i} />
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