// import { useEffect } from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/style.css";

export default function AddToCart() {
  const nav = useNavigate();
  const loc = useLocation();
  // console.log(loc.state);
  const [quantity, setQuantity] = useState(1);
  // const [rate,setRate]=useState('');
  const [productDetails, setProductDetails] = useState("");

  useEffect(() => {
    setProductDetails(loc.state);
  }, [loc.state]);

  function QuantityAdd() {
    setQuantity(quantity + 1);
  }
  function QuantitySub() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  function PaymentGet() {
    if (localStorage.getItem("Email") !== null) {
      nav("/payment");
    } else {
      nav("/");
    }
  }

  return (
    <Container className="mx-auto" style={{ margin: "2rem 0rem" }}>
      <Row style={{ border: "1px solid black" }}>
        <Col>
          <Image
            src={productDetails.img}
            style={{ width: "8rem", height: "10rem" }}
          />
        </Col>
        <Col className="d-flex flex-column justify-content-center">
          <h4>{productDetails.name}</h4>
          <h5>Rs. {productDetails.rate}/-</h5>
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
      <Row style={{ margin: "2rem 0rem" }}>
        <Col className="d-flex flex-column align-items-end" >
          <h5>Estimated Total Rs.{productDetails.rate * quantity}</h5>
          <p>*Taxes, discounts and shipping charges included at checkout*</p>
          <Button className="footerButton" onClick={PaymentGet}>
            {"check out"}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
