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
    }
    return state;
}