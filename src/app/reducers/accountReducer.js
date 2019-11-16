import merge from "merge";
import accountHelper from "../helpers/accountHelper";
import { FULFILLED } from 'redux-promise-middleware'
const initialState = {
    account: {}
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case `${accountHelper.REST_ACTIONS.FETCH_ACCOUNT_PROFILE}_${FULFILLED}`: {
            return merge(true, state, {account: payload.data});
        }
    }
    return state;
}