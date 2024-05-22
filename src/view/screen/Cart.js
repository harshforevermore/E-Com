import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "../style/style.css";
import {useState} from 'react';

const Cart = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  
  const [quantity, setQuantity] = useState(1);
  function QuantityAdd() {
    setQuantity(quantity + 1);
  }
  function QuantitySub() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  return (
    <Container>
      {cart.map((e) => (
        <Row className="mt-3 border border-dark">
          <Col key={e.id}>
            <Image src={e.img} style={{ width: "8rem", height: "10rem" }} />
          </Col>
          <Col className="d-flex flex-column justify-content-center">
          <h4>{e.name}</h4>
          <h5>Rs. {e.rate}/-</h5>
        </Col>
        <Col className="quantityButtonsCol">
          <div className="quantityButtonsDiv">
            <section className="d-flex align-items-center" style={{ borderRight: "1px solid black" }}>
              <Button
                className="footerButton quantityButtonPlus"
                onClick={QuantityAdd}
              >
                +
              </Button>
              {quantity}
              <Button
                className="footerButton quantityButtonMinus"
                onClick={QuantitySub}
              >
                -
              </Button>
            </section>
            <section className="dustbitSection">
              <Image
                className="dustbinImage"
                src={require("../image/Logo/icons8-delete-30.png")}
              />
            </section>
          </div>
        </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Cart;
