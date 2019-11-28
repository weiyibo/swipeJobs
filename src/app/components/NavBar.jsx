import React from "react"
import {Link, withRouter} from "react-router-dom"
import {connect} from "react-redux";

const Nav = ({ account }) => {
    return (
        <nav class="navbar navbar-default">
            <Link to="/" class="navbar-brand">React Test</Link>
        </nav>
    );
};
const mapStoreToProps = (store) => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    setTimeout(() => {

    }, 0);
    return {

    }
}
export default withRouter(connect(mapStoreToProps, mapDispatchToProps)(Nav))


