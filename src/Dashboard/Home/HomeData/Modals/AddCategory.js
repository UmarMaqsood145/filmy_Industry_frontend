import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

function AddCategory({ categoryModal, setCategoryModal }) {
  return (
    <>
      <Modal show={categoryModal} onHide={() => setCategoryModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" name="category" />
            </Form.Group>
            <Form.Group
              className="mb-3 inputForMargin"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Sub Category</Form.Label>
              <Form.Control type="text" name="subCategory" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setCategoryModal(false)}>
            Cancel
          </Button>
          <button className="modalBtn" type="submit">
            Add Category
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCategory;
