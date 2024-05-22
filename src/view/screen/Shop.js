import { Col, Container, Row } from "react-bootstrap"
import {shop} from '../data/data'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import '../style/style.css';
function Shop(){
    const [titlename,setTitle]=useState('');
    const nav =useNavigate();
    useEffect(()=>{
        setTitle(shop);
    },[])
    
    let cart = [];
    
    function handleClickCart(value){
        // localStorage.setItem('cart','[]');
        cart.push(value);
        localStorage.setItem('cart',JSON.stringify(cart));
    }

    return(
        <>
        <Container className="mx-auto shop">
            <Row>
                {
                    titlename&&titlename.map(value=>(
                        <Col key={value.id} lg={3} md={6} sm={6}>
                             <Card className="shopCard">
                            <Card.Img variant="top" src={value.img} onClick={()=>nav('/Details',{state:value})}/>
                            <Card.Body>
                                <Card.Title className="cardTitle" title={value.name}>{value.name}</Card.Title>
                                <div className="cardButtons">
                                <Button className="footerButton" onClick={()=>{handleClickCart(value)}}>Add To Cart</Button>
                                <Button className="footerButton">Buy Now</Button>
                                </div>
                            </Card.Body>
                            </Card>
                        </Col>

                    ))
               
                }
            </Row>

        </Container>

        </>
    )
}
export default Shop























