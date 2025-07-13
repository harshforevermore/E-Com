import React, { useEffect,useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "../style/style.css";

const Cart = () => {
  const [cart,setCart] = useState([]);
  const [emptyCart,setEmptyCart] = useState(true);

  useEffect(()=>{
    const storedCart = JSON.parse(localStorage.getItem("cart"));

      if(storedCart && storedCart.length !== 0){
        const updatedCart = storedCart.map(item=>(
          {
            ...item,
            quantity: item.quantity || 1
          }
        ));
        setCart(updatedCart);
        setEmptyCart(false);
      }
      else{
        setEmptyCart(true);
      }
  },[]);

  const updateCart = (updatedCart) =>{
    setCart(updatedCart);
    localStorage.setItem('cart',JSON.stringify(updatedCart));
  };

  const handleQuantityAdd = (id) =>{
    const updatedCart = cart.map(item => 
      item.id === id ? {...item, quantity: item.quantity+1} : item 
    );
    updateCart(updatedCart);
  };
  const handleQuantitySub = (id) =>{
    const updatedCart = cart.map(item => 
      item.id === id && item.quantity > 1 
      ?{...item, quantity:item.quantity - 1}
       : item 
    );
    updateCart(updatedCart);
  };
  const handleRemoveItem = (id) =>{
    const updatedCart = cart.filter(item => item.id !== id);
    updateCart(updatedCart);
  }
  
  // const handleRate = (id) => {
  //   const 
  // }

  return (
    <>
    {
      emptyCart === true ?
      <p id="Empty-Cart" className="display-1 text-center text-danger">Cart is Empty</p>                 /*Empty Cart*/
      :
      <p id="Empty-Cart" className="display-4 text-center text-danger">Cart Items</p>                 /*Not Empty Cart*/
    }
    <Container>
      {cart && cart.map((e) => (
        <Row key={e.id} className="mt-3 border border-dark">
          <Col>
            <Image src={e.img} style={{ width: "8rem", height: "10rem" }} />
          </Col>
          <Col className="d-flex flex-column justify-content-center">
          <h4>{e.name}</h4>
          <h5>Rs. {e.rate * e.quantity}/-</h5>
        </Col>
        <Col className="quantityButtonsCol">
          <div className="quantityButtonsDiv">
            <section className="d-flex align-items-center" style={{position:'relative', borderRight: "1px solid black", gap:"1rem"}}>
              <Button
                className="footerButton quantityButtonMinus"
                onClick={() => handleQuantitySub(e.id)}
                >
                -
              </Button>
                <span style={{position:"absolute",right:"4.1rem",fontSize:'1.1rem',fontWeight:"500"}}>{e.quantity}</span>
              <Button
                className="footerButton quantityButtonPlus"
                onClick={() => handleQuantityAdd(e.id)}
              >
                +
              </Button>
            </section>
            <section className="dustbitSection">
              <Image
                className="dustbinImage"
                src={require("../image/Logo/icons8-delete-30.png")}
                onClick={() => handleRemoveItem(e.id)}
              />
            </section>
          </div>
        </Col>
        </Row>
      ))}
    </Container>
    </>
  );
};

export default Cart;
