import { Col, Container, Image, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { bestseller } from "../data/data";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { addToCart } from "../data/data";
import { useNavigate } from "react-router-dom";
import "../style/style.css";

function Details() {
  const nav = useNavigate();
  const loc = useLocation("");
  const [productDetails, setProductDetails] = useState("");
  const [selectedSize,setSelectedSize] = useState(null);
  const [selectedColor,setSelectedColor] = useState(null);
  const [img, setImg] = useState("");
  useEffect(() => {
    // console.log(loc.state);
    setProductDetails(loc.state);
  }, [loc.state]);
  // console.log(productDetails);

  function ImageChange(img) {
    setImg(img);
  }

  const handleSizeSelect = (size) =>{
    setSelectedSize(size);
  }

  const handleColorSelect = (color) =>{
    setSelectedColor(color);
  }

  function OnAddToCart() {
    console.log("add to cart");
    addToCart.push(productDetails);
    // window.location="/addtocart";
    nav("/addtocart", { state: productDetails });
  }
  const StarImages = [];
  function starImages(ImageNumber) {
    for (let i = 0; i < ImageNumber; i++) {
      StarImages.push(require("../image/Logo/icons8-star-100.png"));
    }
  }

  return (
    <Container style={{ marginTop: "2rem"}} fluid>
      <Row className="d-flex flex-column flex-lg-row justify-content-center" style={{ paddingBottom: "2rem",borderBottom:'2px solid black'}}>
        <Col style={{ display: "flex"}}>
          <div className="side-image-col">
            {productDetails &&
              productDetails.sideimage.map((img) => (
                <Image
                  key={img}
                  src={img}
                  width={"60%"}
                  onClick={() => ImageChange(img)}
                  className="side-image"
                />
              ))}
          </div>
          <div className="main-image-col">
            <Image
              src={img ? img : productDetails.img}
              className="main-image"
              width={"70%"}
              fluid
            />
          </div>
        </Col>
        <Col style={{}}>
          <Row>
            <Col style={{ paddingTop: "1rem" }}>
              <h2>{productDetails.name}</h2>
              <h3 style={{ margin: "1rem 0rem" }}>
                Rs. {productDetails.rate}
                <del style={{ marginLeft: "1rem", fontSize: "1rem" }}>
                  Rs.{productDetails.cutoffRate}
                </del>
              </h3>
            </Col>
          </Row>
          <Row>
            <Col>
              {starImages(productDetails.rating)}
              {StarImages.map(() => (
                <Image
                  src={require("../image/Logo/icons8-star-100.png")}
                  style={{ width: 20 }}
                />
              ))}

              <span style={{ margin: "0rem 1rem" }}>
                {productDetails.userrating} reviews
              </span>
            </Col>
          </Row>
          <Row>
            <Col style={{ margin: "1rem 0rem" }}>
              <b style={{ fontSize: "1.1rem", marginRight: "1rem" }}>size:</b>

              {productDetails &&
                productDetails.size.map((size) => (
                  <Button
                    key={size}
                    className="sizeButtons"
                    style={{
                      marginRight: "0.2rem",
                      backgroundColor: selectedSize === size ? "black" : "white",
                      color : selectedSize === size ? "white" : "black"
                  }}
                  onClick={()=>handleSizeSelect(size)}
                  >
                    {size}
                  </Button>
                ))}

              <Row>
                <Col style={{ margin: "1rem 0rem"}}>
                  <Accordion defaultActiveKey="0" >
                    <Accordion.Item eventKey="1" className="sizeChartAccordion" >
                      <Accordion.Header className="accordionTitle">Size Chart</Accordion.Header>
                      <Accordion.Body className="d-flex flex-column align-items-center">
                        <Image src={require("../image/sizechart.webp")} style={{zIndex:"999", width:"80%"}} fluid />
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              </Row>
              <Row  style={{zIndex:"1"}}>
                <Col>
                  <b style={{ fontSize: "1.1rem", marginRight: "1rem" }}>
                    Colors:
                  </b>
                  {productDetails &&
                    productDetails.color.map((color) => (
                      <Button
                        key={color}
                        style={{
                          backgroundColor: `${color}`,
                          transform : selectedColor === color ? "scale(1.2)" : "none"
                        }}
                        className="colorButtons"
                        onClick={()=>handleColorSelect(color)}
                      >
                        {""}
                      </Button>
                    ))}
                </Col>
              </Row>
              <Row>
                <Col className="alignCenter">
                  <Button
                    onClick={OnAddToCart}
                    className="footerButton"
                    style={{ width: "70%", margin: "1.5rem 0rem" }}
                  >
                    Add To Cart
                  </Button>
                  <Button
                    className="footerButton"
                    style={{ width: "70%", margin: "0.1rem 0rem" }}
                  >
                    Buy Now
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col className="textAlign marginTop">
          <h1>Best Seller</h1>
        </Col>
        <Row>
          {bestseller.map((value) => (
            <Col lg={4} className="alignCenter marginTop">
              <Card className="bestSellerCard" style={{ width: "18rem"}}>
                <Card.Img variant="top" src={value.img} />
                <Card.Body>
                  <Card.Title className="textAlign" style={{ fontSize: 16 }}>{value.name}</Card.Title>
                  <div className="d-flex justify-content-center">
                  <Button className="footerButton">Add To Cart</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Row>

      <Row>
        <Col className="marginTop">
          <Image src={require("../image/Home Banner/banner.jpg")} fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default Details;
