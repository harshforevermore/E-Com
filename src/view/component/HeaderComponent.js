import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../style/style.css'
import { useEffect, useState } from "react";
export default function HeaderComponent(){
    const[user,setUser]=useState('');
    useEffect(()=>{
        setUser(localStorage.getItem('Email'));
    },[]);
    return(
        <Container fluid>
          <Row>
                <Col >
                <Navbar expand="lg"  className="navbar">
      <Container fluid >
        <Navbar.Brand href="/home" style={{fontSize:'2em'}}>Fuku</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{justifyContent:'space-between'}}>
          <Nav
            className="my-2 my-lg-0 navigation alignCenter" //me-auto my-2 my-lg-0
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            {
              user?
              <>
              <Nav.Link href="/home" className="navbarComponents" >Home</Nav.Link>
            <Nav.Link href="/shop" className="navbarComponents">Shop</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown" className="navbarComponents" >
              <NavDropdown.Item href="/menswear">Mens Wear</NavDropdown.Item>
              <NavDropdown.Item href="/womenswear">
              Womens Wear
              </NavDropdown.Item>
              <NavDropdown.Item href="/kidswear">Kids Wear</NavDropdown.Item>
              <NavDropdown.Item href="/accessories">
              Accessories
              </NavDropdown.Item>
            </NavDropdown>
            </>
              :
              <>
              <Nav.Link href="/" className="navbarComponents" >Home</Nav.Link>
            <Nav.Link href="/" className="navbarComponents">Shop</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown" className="navbarComponents" >
              <NavDropdown.Item href="/">Mens Wear</NavDropdown.Item>
              <NavDropdown.Item href="/">
              Womens Wear
              </NavDropdown.Item>
              <NavDropdown.Item href="/">Kids Wear</NavDropdown.Item>
              <NavDropdown.Item href="/">
              Accessories
              </NavDropdown.Item>
            </NavDropdown>
            </>
            }
          </Nav>
          <Nav
            className="my-2 my-lg-0 navigation alignCenter" //  
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Tap to search"
              className="me-2 navbarTextBox"
              aria-label="Search"
            />
            <Button variant="outline-success" className="footerButton navbarButton">Search</Button>
          </Form>
          <a href="/cart" className="navbarImages">
            <img src={require('../image/Logo/icons8-cart-64.png')} alt="" title="Go to Cart" />
            <div className="cartCounter">0</div>
          </a>
          <a href="/profile" className="navbarImages"><img src={require('../image/Logo/icons8-user-96.png')} alt="" title="Profile" /></a>
            {
              user?
            <Nav.Link href="/logout" className="navbarComponents" style={{}}>Logout</Nav.Link>
            :
              <>
              <Nav.Link href="/" className="navbarComponents">Login</Nav.Link>
              </>
            }

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
                
                </Col>
            </Row>

        </Container>
    )
}

