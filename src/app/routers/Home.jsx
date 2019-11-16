import React from "react";
import { connect } from "react-redux";
import { Tabs, Tab} from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import accountHelper from '../helpers/accountHelper';
import {fetchJobs, changeTab, acceptJob, rejectJob, closeWarningDialog} from '../actions/jobActions';
import JobPanel from '../components/Job.jsx'
import EmptyMessage from "../components/EmptyMessage.jsx";
import WarningDialog from "../components/WarningDialog.jsx";


const Home = ({ activeTabId, matchedJobs, acceptedJobs, rejectedJobs, onTabChange, account, onAccept, onReject, warningObject, closeWarningDialog}) => {
    return (
        <div className="content">
            <Tabs defaultActiveKey={1} id="jobs-tab" activeKey={activeTabId} onSelect={onTabChange}>
                <Tab eventKey={1} title="Matched Jobs">
                    { matchedJobs.length > 0 ?  <JobPanel jobs={matchedJobs} onAccept={(job) => onAccept(account, job)} onReject={(job) => onReject(account, job)}/> : <EmptyMessage message="No job matches"/>}
                </Tab>
                <Tab eventKey={2} title="Accepted Jobs">
                    { acceptedJobs.length > 0 ?  <JobPanel jobs={acceptedJobs} isShowButtons={false}/> : <EmptyMessage message="No job accepted"/>}
                </Tab>
                <Tab eventKey={3} title="Rejected Jobs">
                    { rejectedJobs.length > 0 ?  <JobPanel jobs={rejectedJobs} isShowButtons={false}/> : <EmptyMessage message="No job Rejected"/>}
                </Tab>
            </Tabs>
            <WarningDialog warningObject={warningObject} handleHide={closeWarningDialog}/>
        </div>
    )
}


const mapStoreToProps = (store, props) => {
    return {
        matchedJobs: store.job.matchedJobs,
        activeTabId: store.job.activeTabId,
        acceptedJobs: store.job.acceptedJobs,
        rejectedJobs: store.job.rejectedJobs,
        account: store.account.account,
        warningObject: store.job.warningObject || null
    }
}

const mapDispatchToProps = dispatch => {
    setTimeout(() => {
        dispatch(fetchJobs(accountHelper.defaultAccount.id));
    }, 0);
    return {
        onTabChange: (activeTabId) => {
           dispatch(changeTab(activeTabId));
        },
        onAccept: (account, job) => {
            dispatch(acceptJob(account.workerId, job));
        },
        onReject: (account, job) => {
            dispatch(rejectJob(account.workerId, job));
        },
        closeWarningDialog: () => {
            dispatch(closeWarningDialog());
        }
    }
}
export default withRouter(connect(mapStoreToProps, mapDispatchToProps)(Home))
