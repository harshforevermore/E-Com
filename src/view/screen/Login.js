import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../style/style.css'
import { useState } from "react";

export default function Login(){
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    const isEmail=(event)=>{
        setEmail(event.target.value);
    }
    
    const isPassword=(event)=>{
        setPassword(event.target.value);
    }

    const onPressLogin=()=>{
        console.log(email);
        console.log(password);
        console.log("click");
        // setEmail("");
        // setPassword("");
        const userEmail = localStorage.getItem('UserEmail');
        const userPassword = localStorage.getItem('UserPassword');
        if(userEmail === email && userPassword === password){
          localStorage.setItem("Email",email);
          localStorage.setItem("Password",password);
          alert('User Logged in');
          setEmail("");
          setPassword("");
          window.location="/home";
        }
        else{
          alert(`Email or Password do not match. If you don't have a account Register to login`);
          window.location.href="/";
        }

    }

    return(
        <Container className="login-form">
            <Row >

            <Col className="alignCenter">
            <h1>Login</h1>
            <Form style={{marginTop:'2rem'}}>
      <Form.Group className="mb-3" controlId="loginEmail">
        <Form.Control type="email" value={email} onChange={isEmail} placeholder="Email Address" className="textBox" required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="loginPassword">
        <Form.Control type="password" value={password} onChange={isPassword} placeholder="Password" className="textBox" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="Checkbox">
        <Form.Check type="checkbox" label="Remember me"/>
      </Form.Group>
    </Form>
      <Button variant="primary" type="button" onClick={onPressLogin} className="LoginButton">
        Login
      </Button>
            </Col>
            </Row>
            <Row style={{marginTop:'2rem'}}>
              <Col className="textAlign">
                <p>Don't have a Account? <a href="/registration" className="footerLinks">Register Here</a></p>
              </Col>
            </Row>
        </Container>
    )
}