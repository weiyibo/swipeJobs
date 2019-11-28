import merge from "merge";
import { FULFILLED, REJECTED, PENDING } from 'redux-promise-middleware';
import personHelper from "../helpers/personHelper";
import { change } from "redux-form";
const initialState = {
    persons: personHelper.defaultPersonList,
    editingPerson: null
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case personHelper.ACTIONS.CHANGE_EDITING_PERSON: {
            return merge(true, state, {editingPerson: payload});
        }
        case personHelper.ACTIONS.CREATE_NEW_PERSON: {
            const {persons} = state;
            payload.id = persons.length + 1;
            persons.push(payload);

            return merge(true, state, {persons, editingPerson: null});
        }
    }
    return state;
}