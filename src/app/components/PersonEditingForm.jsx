import React from "react";
import { connect } from "react-redux";
import { Modal, Button} from 'react-bootstrap';
import { Field, reduxForm, change, submit } from "redux-form";
import {Container} from './reduxForm/formContainers'
import {Input} from './reduxForm/formEditors'
import {changeEditingPerson, createNewPerson} from '../actions/personActions'
import personHelper from "../helpers/personHelper";

const FormInput = Container(Input);

let PersonEditingForm = ({ handleSubmit, initialValues, handleClose, handleSave}) => {
    return (
        <Modal show={ initialValues != null } aria-labelledby="contained-modal-title" onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title >Editing Person</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <Field name="name" label="Name" component={FormInput} type="text" />
                    <Field name="email" label="Email" component={FormInput} type="text" />
                    <Field name="phone" label="Phone" component={FormInput} type="text" />
                </form>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={handleClose}>Cancel</Button>
                <Button bsStyle="primary" type="submit" onClick={handleSave}>Save</Button>
            </Modal.Footer>
        </Modal>
    )
}

const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Required';
    }

    if (!values.email) {
        errors.email = 'Required';
    }

    if (!values.phone) {
        errors.phone = 'Required';
    }

    return errors;
}

PersonEditingForm = reduxForm({
    form: "personEditingForm",
    validate,
    enableReinitialize:true,
})(PersonEditingForm);

const mapStoreToProps = (store, props) => {
    return {
        initialValues: store.person.editingPerson,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSave: () => {
            dispatch(submit("personEditingForm"));
        },
        onSubmit: (values) => {
            dispatch(createNewPerson(values));
        },
        handleClose: () => {
            dispatch(changeEditingPerson(null));
        },
    }
}
export default connect(mapStoreToProps, mapDispatchToProps)(PersonEditingForm);
