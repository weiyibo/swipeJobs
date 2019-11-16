import axios from 'axios';
import accountHelper from '../helpers/accountHelper';

export function fetchAccountProfile(id){
    return {type: accountHelper.REST_ACTIONS.FETCH_ACCOUNT_PROFILE, payload: axios.get(`${accountHelper.REST_URL}/${id}/profile`)};
}