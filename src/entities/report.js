
class Report {
    constructor(data) {
        this.reportId = data.reportId;
        this.candidateId = data.candidateId
        this.candidateName = data.candidateName;
        this.companyId = data.companyId;
        this.companyName = data.companyName;
        this.interviewDate = data.interviewDate;
        this.phase = data.phase;
        this.status = data.status;
        this.note = data.note
    }
}

export default Report;