
class Report {
    constructor(data) {
        this.reportId = data.id;
        this.candidateId = data.candidateId
        this.candidateName = data.candidateName;
        this.companyId = data.companyId;
        this.companyName = data.companyName;
        this.interviewDate = new Date(data.interviewDate).toDateString();
        this.phase = data.phase;
        this.status = data.status;
        this.note = data.note
    }
}

export default Report;