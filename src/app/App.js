import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ReportLIstPage from './pages/reportListPage/ReportListPage';
import SubmitReportPage from './pages/submitreportpage/SubmitReportPage';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/reports" component={ReportLIstPage} />
        <Route path="/createreport" component={SubmitReportPage} />
      </Switch>  
    );
  }
}

export default App;
