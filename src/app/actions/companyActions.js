import companyHelper from '../helpers/companyHelper';
import {FULFILLED} from "redux-promise-middleware";

export function updateEditingCompany(company) {
    return {type: companyHelper.ACTIONS.CHANGE_EDITING_COMPANY, payload: company};
}
export function updateCompany(updatedCompany) {
    return {type: `${companyHelper.ACTIONS.UPDATE_COMPANY}_${FULFILLED}`, payload: updatedCompany};
}