import { useEffect, useState } from "react";
import { Col, Container, Row, Button,Image } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import "../style/style.css";

const data = [
  { name: "Delivery", color: "blue" },
  { name: "Confirmation", color: "blue" },
  { name: "Payment", color: "blue" },
  { name: "Finish", color: "blue" },
];
export default function Payment() {
  // const [next, setNext] = useState("");
  const [color, setColor] = useState("");

  const [key, setKey] = useState(0);
  const [colordata, setColorData] = useState("");

  useEffect(() => {
    setColorData(data);
  }, [data]);


  

  function onClickNext() {
    console.log(key);
    console.log("next");
    setColor("deeppink");
    data[key].color = "deeppink";
    if (key < 3) {
      setKey(key + 1);
    }
  }

  function onClickBack() {
    console.log(key);
    console.log("Back");
    data[key].color="blue";
    if(key>0){

        setKey(key-1);
    }
  }

  console.log(data);

  function Delivery() {
    return (
    <Container>

    <h1>Customer Info</h1>
    <Row>
      <Col>

    <Form style={{marginTop:'2rem'}}>
      
    <Form.Group className="mb-3" controlId="payeeName">
      <Form.Control className="textBox" type="text"  placeholder="Name"/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="payeeCardNo">
      <Form.Control className="textBox" type="text"  placeholder="Card Number"/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="cardDate">
      <Form.Control className="textBox" type="text"  placeholder="Address"/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="cardCVV">
      <Form.Control className="textBox" type="text" placeholder="Phone No."/>
    </Form.Group>
    
  </Form>
    
      </Col>
    </Row>
    </Container>
    )
  }
  function Confirmation() {
    return (
      <Container>
        <h1>Confirmation</h1>

      <Row>
        <Col>
  
      <Form style={{marginTop:'2rem'}}>
        
      <Form.Group className="mb-3" controlId="cardCVV">
        <Form.Control className="textBox" type="text" placeholder="Enter OTP"/>
      </Form.Group>
      
    </Form>
      
        </Col>
      </Row>
      </Container>
    
    
    )
  }

  function Payment() {
    return(
      <Container   >
      <Container style={{width:'100%',padding:'2% 3%',boxShadow:'0.5px 0.5px 2px grey'}}>
        <Row>
          <Col>
          <Row style={{alignItems:'center'}}>
            <Col style={{textAlign:'center',boxShadow:'0.5px 0.5px 2px grey',height:'10rem'}}>
                <Image src={require('../image/Logo/visa-payment-card1873.jpg')} style={{width:'10rem'}}/>
                <Image src={require('../image/Logo/mastercard.png')} style={{width:'8rem'}} /><br/>
                <input type="radio" id="creditCard" name="Payment_Method"/>
                <label htmlFor="creditCard" style={{fontWeight:'700',marginLeft:'0.6rem'}}>Pay with Credit Card</label>
            </Col>
            <Col style={{textAlign:'center',boxShadow:'0.5px 0.5px 2px grey',height:'10rem'}}>
                <Image src={require('../image/Logo/Paypal.png')} style={{width:'20rem',margin:'1rem 0rem'}} /><br/>
                <input type="radio" id="paypal" name="Payment_Method"/>
                <label htmlFor="paypal" style={{fontWeight:'700',marginLeft:'0.6rem'}}>Pay with Paypal</label>
            
            </Col>
          </Row>
      <Form style={{marginTop:'2rem'}}>
      
      <Form.Group className="mb-3" controlId="payeeName">
        <Form.Control className="textBox" type="text" placeholder="Cardholder's Name"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="payeeCardNo">
        <Form.Control className="textBox" type="text" placeholder="Card Number"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="cardDate">
        <Form.Control className="textBox" type="date" placeholder="Valid thru"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="cardCVV">
        <Form.Control className="textBox" type="password" placeholder="CVV/CVC*"/>
        <Form.Text>*CVV or CVC is the card security code, unique three dight number on the back of your card separate from its number.</Form.Text>
      </Form.Group>
      
    </Form>
          </Col>
        </Row>
      </Container>
      </Container>
    )
  }

  function Finish() {
    return <h1>End</h1>;
  }


  return (
    <Container className="d-flex flex-column align-items-center" style={{marginTop:'4rem', height: "fit-content" ,width:'70%'}}>
        <Row style={{width:'80%'}}>
          {colordata &&
            colordata.map((d) => (
              <Col>
                <div
                  style={{
                    width: "100%",
                    height: 10,
                    backgroundColor: d.color,
                  }}
                ></div>
                <h6 style={{color:d.color}}>{d.name}</h6>
              </Col>
            ))}
        </Row>
      <Container style={{ width:'80%',marginBottom:'4rem'}}>
        <Row style={{height:'5rem',alignItems:'center'}}>
          <Col style={{display:'flex',justifyContent:'space-between'}}>
                <Image src={require("../image/Logo/icons8-arrow-64.png")} onClick={onClickBack} className="backButtonImage"/>
                <Image src={require("../image/Logo/icons8-arrow-64.png")} onClick={onClickNext} className="forwardButtonImage"/>
          </Col>
        </Row>
        <Col>
          {key === 0
            ? Delivery()
            : key === 1
            ? Confirmation()
            : key === 2
            ? Payment()
            : Finish()}
        </Col>
        <Row style={{ margin: "2rem 0rem" }}>
          <Col style={{ textAlign: "center",display:'flex',justifyContent:'space-between' }}>
            <Button className="footerButton" onClick={onClickBack}>Back</Button>
            <Button className="footerButton" onClick={onClickNext}>Next</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
