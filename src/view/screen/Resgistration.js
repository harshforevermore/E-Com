import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import '../style/style.css';
import { useState } from "react";

export default function Registration() {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const isName=(event)=>{
        setName(event.target.value);
    }
    const isEmail=(event)=>{
        setEmail(event.target.value);
        
    }
    const isPassword=(event)=>{
        setPassword(event.target.value);

    }

    const onPressRegister=()=>{
        console.log(name);
        console.log(email);
        console.log(password);
        localStorage.setItem('UserName',name);
        localStorage.setItem('UserEmail',email);
        localStorage.setItem('UserPassword',password);
        setName("")
        setEmail("");
        setPassword("");
        alert('successfully registered');
        window.location.href = '/';
    }
  return (
    

    <Container className="login-form">
      <Row>
        <Col className="alignCenter">
          <h1>Registration</h1>
          <Form style={{marginTop:'2rem'}}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control type="text" value={name} onChange={isName} placeholder="Name" className="textBox" required/>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="email">
              <Form.Control type="email" value={email} onChange={isEmail} placeholder="Email Address" className="textBox" required/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Control type="password" value={password} onChange={isPassword} placeholder="Password" className="textBox" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="checkbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
          </Form>
            <Button variant="primary" type="submit" onClick={onPressRegister} className="LoginButton">
              Register
            </Button>
        </Col>
      </Row>
    </Container>
  );
}
