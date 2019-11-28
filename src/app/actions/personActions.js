import personHelper from '../helpers/personHelper';
import {change} from "redux-form";

export const changeEditingPerson = (person) => {
    return {type: personHelper.ACTIONS.CHANGE_EDITING_PERSON, payload: person };
}

export const createNewPerson = (newPerson) => {
    newPerson.id = Math.floor(Math.random() * 10);
    return dispatch => {
        dispatch(change("companyEditingForm", "contactPerson", newPerson));
        dispatch({type: personHelper.ACTIONS.CREATE_NEW_PERSON, payload: newPerson});
    };
}