import React from "react"
import {Link, withRouter} from "react-router-dom"
import {fetchAccountProfile} from "../actions/accountActions";
import accountHelper from "../helpers/accountHelper";
import {connect} from "react-redux";

const Nav = ({ account }) => {
    return (
        <nav class="navbar navbar-default">
            <Link to="/" class="navbar-brand">swipejobs</Link>
            <p className="navbar-text user-name">{account.firstName} {account.lastName}</p>
        </nav>
    );
};
const mapStoreToProps = (store) => {
    return {
        account: store.account.account,
    }
}

const mapDispatchToProps = dispatch => {
    setTimeout(() => {
        dispatch(fetchAccountProfile(accountHelper.defaultAccount.id));
    }, 0);
    return {

    }
}
export default withRouter(connect(mapStoreToProps, mapDispatchToProps)(Nav))


