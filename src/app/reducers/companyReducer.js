import merge from "merge";
import { FULFILLED, REJECTED, PENDING } from 'redux-promise-middleware';
import companyHelper from "../helpers/companyHelper"
const initialState = {
    companies: companyHelper.defaultCompanyList,
    editingCompany: null,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case companyHelper.ACTIONS.CHANGE_EDITING_COMPANY: {
            return merge(true, state, {editingCompany: payload});
        }
        case `${companyHelper.ACTIONS.UPDATE_COMPANY}_${FULFILLED}`: {
            console.log(payload)

            let {companies} = state;
            companies = companies.map(_ => ( _.id == payload.id ? payload : _));

            console.log(companies)
            return merge(true, state, {companies, editingCompany: null});
        }
    }
    return state;
}