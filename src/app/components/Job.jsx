import React, {Fragment} from "react";
import { connect } from "react-redux";
import { Panel, Table  } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import accountHelper from '../helpers/accountHelper';
import {fetchJobs} from '../actions/jobActions';
import moment from "moment-timezone";

const Job = ({ jobs, onAccept, onReject, isShowButtons = true }) => {
    return (
        jobs.map(job =>{
            const reportToPhone = job.company.reportTo.phone ?
                '(' + job.company.reportTo.phone.substr(0, 3) + ') ' + job.company.reportTo.phone.substr(3)
                : null;
            return <Panel id={job.jobId} key={job.jobId} defaultExpanded>
                    <Panel.Heading>
                        <Panel.Title toggle>
                            {job.jobTitle.name}
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body>
                            <Table hover>
                                <thead>
                                <tr>
                                    <th colSpan="2">
                                        <img src={job.jobTitle.imageUrl} alt="No image provided" className="image-size"/>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td colSpan="2" className="first-col">
                                        <span className="job-name">{job.jobTitle.name}</span><br/>
                                        <span className="company-name">{job.company.name}</span>
                                    </td>
                                </tr>
                                <tr style={{backgroundColor: "#6ee387"}}>
                                    <td colSpan="2">
                                        <div>
                                            <span><b>Distance</b></span>
                                            <span className="pull-right"><b>Hourly Rate</b></span>

                                        </div>
                                        <div>
                                            <span className="custom-font-size"><b>{job.milesToTravel.toFixed(2)} miles</b></span>
                                            <div className="pull-right">
                                                <span className="dollar-sign"><b>$</b></span>
                                                <span className="custom-font-size"><b>{( job.wagePerHourInCents / 100).toFixed(2) }</b></span>
                                            </div>
                                        </div>
                                    </td>

                                </tr>
                                {
                                    job.shifts.length > 0 &&
                                    <tr>
                                        <td className="icon-col">
                                            <span className="glyphicon glyphicon-calendar" aria-hidden="true"></span>
                                        </td>
                                        <td className="item-col">
                                            <span className="item-title">Shift Dates</span><br/>
                                            {
                                                job.shifts.map( (shift, index) =>
                                                        <Fragment key={index}>
                                                            <span className="location-1" key={index}>
                                                                {moment.tz(shift.startDate, job.company.address.zoneId).format("MMM D, ddd h:MM A")} - {moment.tz(shift.endDate, job.company.address.zoneId).format("h:MM A")} {moment.tz(shift.endDate, job.company.address.zoneId).format("z")}</span><br/>
                                                        </Fragment>
                                                )
                                            }
                                        </td>
                                    </tr>
                                }
                                <tr>
                                    <td className="icon-col">
                                        <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                                    </td>
                                    <td className="item-col">
                                        <span className="item-title">Location</span><br/>
                                        <span className="location-1">{job.company.address.formattedAddress}</span><br/>
                                        <span className="location-2">{job.milesToTravel.toFixed(2)} miles from your job search location</span>
                                    </td>
                                </tr>
                                {
                                    job.requirements &&
                                    <tr>
                                        <td className="icon-col">
                                            <span className="glyphicon glyphicon-wrench" aria-hidden="true"></span>
                                        </td>
                                        <td className="item-col">
                                            <span className="item-title">Requirements</span><br/>
                                            {
                                                job.requirements.map((requirement,index) =>
                                                    <Fragment key={index}><span className="location-1" key={index}>- {requirement}</span><br/></Fragment>
                                                )
                                            }
                                        </td>
                                    </tr>
                                }
                                <tr>
                                    <td className="icon-col">
                                        <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                                    </td>
                                    <td className="item-col">
                                        <span className="item-title">Report To</span><br/>
                                        <span className="location-1">
                                            {job.company.reportTo.name} {reportToPhone && reportToPhone}
                                        </span>
                                    </td>
                                </tr>
                                {
                                    isShowButtons &&
                                    <tr>
                                        <td colSpan="2" className="pull-center button-col">
                                            <button type="button" className="btn reject-btn pointer"
                                                    onClick={() => onReject(job)}>No Thanks
                                            </button>
                                            <button type="button" className="btn btn-default pointer accept-btn"
                                                    onClick={() => onAccept(job)}>I'll Take it
                                            </button>
                                        </td>
                                    </tr>
                                }
                                </tbody>
                            </Table>
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
        }
        )
    )
}


const mapStoreToProps = (store, props) => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}
export default withRouter(connect(mapStoreToProps, mapDispatchToProps)(Job))
