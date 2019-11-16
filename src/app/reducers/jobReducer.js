import merge from "merge";
import jobHelper from "../helpers/jobHelper";
import { FULFILLED, REJECTED, PENDING } from 'redux-promise-middleware'
const initialState = {
    activeTabId: jobHelper.defaultActiveTabId,
    matchedJobs: [],
    acceptedJobs: [],
    rejectedJobs: [],
    warningObject: null
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case `${jobHelper.REST_ACTIONS.FETCH_JOBS}_${FULFILLED}`: {
            return merge(true, state, {matchedJobs: payload.data});
        }
        case `${jobHelper.REST_ACTIONS.ACCEPT_JOB}_${PENDING}`: {
            break;
        }
        case `${jobHelper.REST_ACTIONS.ACCEPT_JOB}_${FULFILLED}`: {
            let {matchedJobs, acceptedJobs} = state;
            const { job, response} = payload;

            if(response.success){
                acceptedJobs.push(job);
                matchedJobs = matchedJobs.filter(_ => _.jobId != job.jobId);
                return merge(true, state, {matchedJobs, acceptedJobs});
            }else {
                return merge(true, state, {warningObject: response});
            }
        }
        case `${jobHelper.REST_ACTIONS.REJECT_JOB}_${FULFILLED}`: {
            let {matchedJobs, rejectedJobs} = state;
            const { job, response} = payload;

            if(response.success){
                rejectedJobs.push(job);
                matchedJobs = matchedJobs.filter(_ => _.jobId != job.jobId);
                return merge(true, state, {matchedJobs, rejectedJobs});
            }else {
                return merge(true, state, {warningObject: response});
            }
        }
        case `${jobHelper.ACTIONS.CHANGE_TAB}`: {
            return merge(true, state, {activeTabId: payload});
        }
        case `${jobHelper.ACTIONS.CLOSE_WARNING_DIALOG}`: {
            return merge(true, state, {warningObject: null});
        }
    }
    return state;
}