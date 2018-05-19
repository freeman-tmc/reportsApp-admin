import React, { Component } from 'react';
import Header from '../../partials/Header';
import Footer from '../../partials/Footer';
import Navigation from './Navigation';
import SelectionPreview from './SelectionPreview';
import ListOfCandidates from './ListOfCandidates';
import ListOfCompanies from './ListOfCompanies';
import ReportForm from './ReportForm';
import { postReport } from '../../../services/reportsService';


class SubmitReportPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'candidates',
            selectedCandidate: '',
            selectedCompany: '',
        };
    }

    toNextPage = (page, candidate, company) => {
        if (!company) {
            this.setState({
                display: page,
                selectedCandidate: candidate
            })
        } else {
            this.setState({
                display: page,
                selectedCompany: company
            })
        }
    }

    toPreviousPage = (page) => {
        if (page === 'candidates') {
            this.setState({
                display: page,
                selectedCandidate: '',
                selectedCompany: ''
            })
        } else {
            this.setState({
                display: page,
                selectedCompany: ''
            })
        }
    }

    submitReport = (data) => {
        let submitData = {
            candidateId: this.state.selectedCandidate.id,
            candidateName: this.state.selectedCandidate.name,
            companyId: this.state.selectedCompany.id,
            companyName: this.state.selectedCompany.name,
            interviewDate: data.dateInput,
            phase: data.phaseInput,
            status: data.statusInput,
            note: data.noteInput
        }
        postReport(submitData);
        this.props.history.push('/');

    }

    render() {
        return (
            <React.Fragment>
                <div className="main-container">
                    <Header />
                    <div className="container">
                        <div className="main-nav">
                            <Navigation />
                            {this.state.selectedCandidate
                                ? <SelectionPreview candidate={this.state.selectedCandidate} company={this.state.selectedCompany} />
                                : ''}
                        </div>
                        <div className="main-section">
                            {this.state.display === 'candidates'
                                ? <ListOfCandidates nextButton={this.toNextPage} />
                                : ''}
                            {this.state.display === 'companies'
                                ? <ListOfCompanies backButton={this.toPreviousPage} nextButton={this.toNextPage} />
                                : ''}
                            {this.state.display === 'report submit'
                                ? <ReportForm backButton={this.toPreviousPage} submitButton={this.submitReport} />
                                : ''}
                        </div>
                    </div>
                    <div id="push"></div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default SubmitReportPage;