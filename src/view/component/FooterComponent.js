import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../style/style.css';
function FooterComponent(){
    return(
        <>
        <Container fluid>
        <Container className="footer " fluid>
            <Row>
                <Col lg={3} md={6} className="footerComponents">
                    <p className="p-heading">ABOUT</p>
                    <span className="componentContent">In case you are using Sass the simplest way is to include the Bootstrap’s source Sass files in your main Sass file and then require it on your src/index.js or App.js file. This applies to a typical create-react-app application in other use cases you might have to setup the bundler of your choice to compile Sass/SCSS stylesheets to CSS.</span>
                </Col> 
                <Col lg={3} md={6} className="footerComponents">
                    <p className="p-heading">OUR POLICIES</p>
                   
                   <a href="#" className="componentContent footerLinks"> Shipping Details</a><br/>
                   <a href="#" className="componentContent footerLinks">Return & Exchange Policy</a><br/>
                   <a href="#" className="componentContent footerLinks">Return & Exchange Policy</a><br/>
                   <a href="#" className="componentContent footerLinks">Order Cancellation</a><br/>
                   <a href="#" className="componentContent footerLinks">Privacy Policy</a><br/>
                   <a href="#" className="componentContent footerLinks">Terms Of Service</a><br/>
                   <a href="#" className="componentContent footerLinks">Refund Policy</a><br/>
                    
                </Col> 
                <Col lg={3} md={6} className="footerComponents ">
                    <p className="p-heading">EXPLORE US</p>
                    <a href="#" className="componentContent footerLinks"> About Us</a><br/>
                    <a href="#" className="componentContent footerLinks">Contact Us</a><br/>
                    <a href="#" className="componentContent footerLinks"> Terms And Conditions</a><br/>
                </Col> 
                <Col lg={3} md={6}>
                    <p className="p-heading">SIGN UP AND SAVE</p>
                    
                    <p className="componentContent">In case you are using Sass the simplest way is to include the Bootstrap’s source Sass files </p>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="componentContent">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className="footerTextBox componentContent"/>
                       
                    </Form.Group>

                    </Form>
                   
                    <Button variant="primary" type="submit" className="footerButton">
                        Submit
                    </Button>
                </Col> 
            </Row>
        </Container>
        </Container>
        </>
    )
}

export default FooterComponent