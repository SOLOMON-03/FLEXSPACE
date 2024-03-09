import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './SignIn.css'

export const SignIn = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
       <button className="bg-[#fb35c5] text-white  px-6 py-2 rounded-full" onClick={handleShow}> 
      Get Started
       </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title style={{display:"flex",alignItems:"center"}}>Login<i class="fa-solid fa-right-to-bracket login_icon"></i></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label column sm="2">Email </Form.Label>
        <Col sm="10">
        <Form.Control type="email" placeholder="Enter Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Enter Password" />
        </Col>
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="close_button">
            Close
          </Button>
          <Button variant="success" onClick={handleClose} className="submit_button" >
            Submit
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
