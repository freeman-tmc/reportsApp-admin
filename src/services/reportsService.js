
// collecting data from server 
import Report from '../entities/report';
import Candidate from '../entities/candidate';

export const getReports = (url) => {


    return fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data.map(el => {
                return new Report(el);
            })
        })

}

export const getCandidates = (url) => {


    return fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data.map(el => {
                return new Candidate(el);
            })
        })

}

export const postReport = (data) => {
    let settings = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }

     return fetch('http://localhost:3333/api/reports', settings)

}
export const deleteReport = (id) => {
 
    let settings = {
        method: 'DELETE',
    }

    return fetch(`http://localhost:3333/api/reports/${id}`, settings)

}


