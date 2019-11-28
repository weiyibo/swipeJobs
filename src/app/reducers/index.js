import { reducer as form } from 'redux-form'
import company from "./companyReducer"
import busy from "./busyReducer";
import person from './personReducer'

export default {
    person,
    form,
    company,
    busy,
};
