import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {updateEditingCompany} from '../actions/companyActions';
import CompanyEditingFrom from "../components/CompanyEditingFrom.jsx";
import PersonEditingForm from "../components/PersonEditingForm.jsx";


const Home = ({ companies, editCompany }) => {
    return (
        <div className="text-center">
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Contact Person</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    companies.map(company => <tr key={company.id}>
                        <td className="text-left">{company.id}</td>
                        <td className="text-left">{company.name}</td>
                        <td className="text-left">{company.contactPerson.name}</td>
                        <td className="text-left"><button className="btn btn-primary btn-sm" onClick={() => editCompany(company)}>Edit</button></td>
                    </tr>)
                }
                </tbody>
            </table>

            <CompanyEditingFrom/>

            <PersonEditingForm/>
        </div>
    )
}


const mapStoreToProps = (store, props) => {
    return {
        companies: store.company.companies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editCompany: (company) => {
            dispatch(updateEditingCompany(company));
        }
    }
}
export default withRouter(connect(mapStoreToProps, mapDispatchToProps)(Home))
