import merge from "merge";
import { FULFILLED, REJECTED, PENDING } from 'redux-promise-middleware';
import personHelper from "../helpers/personHelper";
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
    }
    return state;
}