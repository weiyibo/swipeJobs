import axios from 'axios';
import jobHelper from '../helpers/jobHelper';

export function fetchJobs(id){
    return {type: jobHelper.REST_ACTIONS.FETCH_JOBS, payload: axios.get(`${jobHelper.REST_URL}/${id}/matches`)};
}

export const acceptJob = (workerId, job) => dispatch =>{
    dispatch({
        type: jobHelper.REST_ACTIONS.ACCEPT_JOB,
        payload: new Promise( (resolve, reject) => {
            axios.get(`${jobHelper.REST_URL}/${workerId}/job/${job.jobId}/accept`).then(response => {
                resolve({job, response: response.data})
            })
        }),
    })
}

export const rejectJob = (workerId, job) => dispatch =>{
    dispatch({
        type: jobHelper.REST_ACTIONS.REJECT_JOB,
        payload: new Promise( (resolve, reject) => {
            axios.get(`${jobHelper.REST_URL}/${workerId}/job/${job.jobId}/reject`).then(response => {
                resolve({job, response: response.data})
            })
        }),
    })
    //return {type: jobHelper.REST_ACTIONS.REJECT_JOB, payload: { response: axios.get(`${jobHelper.REST_URL}/${workerId}/job/${jobId}/reject`), jobId} };
}

export function changeTab(activeId) {
    return {type: jobHelper.ACTIONS.CHANGE_TAB, payload: activeId};
}

export function closeWarningDialog() {
    return {type: jobHelper.ACTIONS.CLOSE_WARNING_DIALOG};
}