import React  from "react";
import Card from 'react-bootstrap/Card';
import image from '../images/img.jpg'
import img from '../images/img2.jpg'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import "../css/body.css";
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import img1 from '../images/img3.jpg'
import img2 from '../images/img4.jpg'
import img3 from '../images/img5.jpg'
const Body = () =>{
    return(
      <>
      
    <Card style={{ width: '62.9rem' }}>
      
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="TEXT">THE BAND</Card.Title>
       <p>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
       
      </Card.Body>
    </Card>
    <Container className="PIC">
      <Row>
        <Col >Name
          <Image src={img} rounded />
        </Col>
        <Col >Name
          <Image src={img} rounded />
        </Col>
        <Col >Name
          <Image src={img} rounded/>
        </Col>
      </Row>
    </Container>

       <h1>TOUR DATES </h1>
       <p className="P">Remember to book your tickets!</p>
       
    <CardGroup >
      <Card>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>New York</Card.Title>
          <Card.Text>
          Praesent tincidunt sed tellus ut rutrum sed vitae justo.
          </Card.Text>
          <Button variant="dark">Buy Tickets</Button>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src={img2}/>
        <Card.Body>
          <Card.Title>Paris</Card.Title>
          <Card.Text>
          Praesent tincidunt sed tellus ut rutrum sed vitae justo.
          </Card.Text>
    
        <Button variant="dark">Buy Tickets</Button>
      
        </Card.Body>
     
      </Card>
      <Card>
        <Card.Img variant="top" src={img3} />
        <Card.Body>
          <Card.Title>San Francisco</Card.Title>
          <Card.Text>
          Praesent tincidunt sed tellus ut rutrum sed vitae justo.
          </Card.Text>
          <Button variant="dark">Buy Tickets</Button>
        </Card.Body>
       
      </Card>
    </CardGroup>
      </>     
      
    )
}
export default Body