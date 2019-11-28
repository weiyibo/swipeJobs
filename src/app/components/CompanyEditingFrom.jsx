import React from "react";
import { connect } from "react-redux";
import { Modal, Button} from 'react-bootstrap';
import {updateEditingCompany} from '../actions/companyActions';
import { Field, reduxForm, change } from "redux-form";
import {Container, ContainerAddon} from './reduxForm/formContainers'
import {Input, Select} from './reduxForm/formEditors'
import {changeEditingPerson} from '../actions/personActions'
import personHelper from "../helpers/personHelper";

const CreateAddon = ContainerAddon("", "glyphicon glyphicon-plus");
const FormInput = Container(Input);
const FormSelectWithCreation = Container(Select, { PostFixAddon: CreateAddon });

let CompanyEditingFrom = ({ handleSubmit, initialValues, persons, handleClose, handleSelectorChange, handleEditingPerson }) => {

    const personOptions = persons.map(person => ({id: person.id, label: person.name, obj: person}));

    return (
        <Modal show={ initialValues != null } aria-labelledby="contained-modal-title" onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title >Editing Company</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <Field name="name" label="Name" component={FormInput} type="text" />
                    <Field name="country" label="Country" component={FormInput} type="text" />
                    <Field name="address" label="Address" component={FormInput} type="text" />
                    <Field name="contactPerson" label="Contact Person" component={FormSelectWithCreation}
                           list={personOptions} postfixOnClick={handleEditingPerson} handleChange={(e) => handleSelectorChange(e, personOptions)}/>
                    <Field name="contactPerson.email" label="Email" component={FormInput} type="text" />
                    <Field name="contactPerson.phone" label="Phone" component={FormInput} type="text" />
                </form>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={handleClose}>Cancel</Button>
                <Button bsStyle="primary">Save</Button>
            </Modal.Footer>
        </Modal>
    )
}


const validate = values => {
    const errors = {contactPerson: {}}
    if (!values.name) {
        errors.name = 'Required';
    }
    if (!values.country) {
        errors.country = 'Required';
    }

    if (!values.address) {
        errors.address = 'Required';
    }

    if (values.contactPerson && !values.contactPerson.email) {
        errors.contactPerson.email = 'Required';
    }

    if (values.contactPerson && !values.contactPerson.phone) {
        errors.contactPerson.phone = 'Required';
    }

    return errors;
}

CompanyEditingFrom = reduxForm({
    form: "companyEditingForm",
    validate,
    enableReinitialize:true,
})(CompanyEditingFrom);

const mapStoreToProps = (store, props) => {
    return {
        initialValues: store.company.editingCompany,
        persons: store.person.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (values) => {
            console.log(values)
        },
        handleClose: () => {
            dispatch(updateEditingCompany(null))
        },
        handleSelectorChange: (e, personOptions) => {
            const newPerson = personOptions.filter(option => option.id == e.target.value).pop().obj;
            dispatch(change("companyEditingForm", "contactPerson", newPerson));
        },
        handleEditingPerson: () => {
            dispatch(changeEditingPerson(personHelper.defaultPerson));
        }
    }
}
export default connect(mapStoreToProps, mapDispatchToProps)(CompanyEditingFrom);
