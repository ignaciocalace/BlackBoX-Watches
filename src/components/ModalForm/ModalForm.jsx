import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useOrderIdContext } from "../../context/OrderIdContext";
import { useCartContext } from "../../context/CartContext";

function ModalForm() {
  const { cartList, totalPrice, cleanCart } = useCartContext();
  const { addIdOrder } = useOrderIdContext();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitCheckout = (e) => {
    e.preventDefault();
    const order = {};
    order.date = new Date().toLocaleString();
    order.buyer = dataForm;
    order.price = totalPrice();
    order.items = cartList.map(({ id, name, price, count, text }) => ({
      id,
      name,
      price,
      count,
      text,
    }));

    const db = getFirestore();
    const queryCollection = collection(db, "orders");

    addDoc(queryCollection, order)
      .then((resp) => {
        addIdOrder(resp.id);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        cleanCart();
        handleClose();
      });
  };

  const [emailRep, setEmailRep] = useState({ emailRepeat: "" });

  const [dataForm, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleOnChange = (e) => {
    setFormData({ ...dataForm, [e.target.name]: e.target.value });
  };

  const handleOnChangeEmail = (e) => {
    setEmailRep({ ...emailRep, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Button className="btn btn-success" onClick={handleShow}>
        Checkout
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={handleOnChange}
                name="name"
                value={dataForm.name}
                placeholder="Your Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="text"
                onChange={handleOnChange}
                name="phone"
                value={dataForm.phone}
                placeholder="Your Phone"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                onChange={handleOnChange}
                name="email"
                value={dataForm.email}
                placeholder="Your Email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Repeat your Email address</Form.Label>
              <Form.Control
                type="text"
                onChange={handleOnChangeEmail}
                name="emailRepeat"
                value={dataForm.emailChecker}
                placeholder="Repeat your Email"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            id="btnSub"
            variant="primary"
            onClick={submitCheckout}
            disabled={
              !(
                emailRep.emailRepeat === dataForm.email &&
                emailRep.emailRepeat != ""
              )
            }
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalForm;
