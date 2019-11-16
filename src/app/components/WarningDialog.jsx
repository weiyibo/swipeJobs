import React from "react";
import { Modal, Button} from 'react-bootstrap';

const WarningDialog = ({ warningObject = null, handleHide}) => {
    return (
        <Modal show={warningObject != null} aria-labelledby="contained-modal-title"
               onHide={handleHide}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">
                    {warningObject && warningObject.errorCode}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {warningObject && warningObject.message}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default WarningDialog
