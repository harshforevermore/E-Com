import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { homeSlider,categories } from '../data/data';

function HomeScreen() {
  return (
    <Container style={{textAlign:'center'}} fluid>
    <Carousel style={{marginTop:'10px'}}>
      {

        homeSlider.map(image =>(

      <Carousel.Item>
      <Image src={image.img} fluid />
      </Carousel.Item>
          ))
    }
    </Carousel>

    <Row style={{margin:'2rem 0rem'}}>
        <Col>
        <h1>Shop by Categories</h1>
        </Col>
        <Row style={{margin:'0.1rem 0rem'}}>
        { categories.map(category=>(
            <Col style={{display:'flex',justifyContent:'center'}}>
            <Card className='shopCard' style={{ width: '19rem' }}>
        <Card.Img variant="top" src={category.img} />
        <Card.Body>
        <Card.Title>{category.title}</Card.Title>
        <Card.Text>
         <h2> {category.offer}</h2>
        </Card.Text>
        <Button className='footerButton'>Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
        ))
        
    }
        </Row>
    </Row>
    <Row>
        <Col>
        <Image src={require('../image/Home Banner/tees.jpeg')} fluid />;
        </Col>
    </Row>

    <Row>
        <Col xs={6} md={4}>
        <Image src={require('../image/homeThumbnails/thumbnail.jpg')} thumbnail />
        </Col>
        <Col xs={6} md={4}>
        <Image src={require('../image/homeThumbnails/thumbnail3.jpg')} thumbnail />
        </Col>
        <Col xs={6} md={4}>
        <Image src={require('../image/homeThumbnails/thumbnail5.jpg')} thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default HomeScreen;