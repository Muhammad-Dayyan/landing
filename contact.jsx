import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import img from '../images/imges.jpg'
import image from '../images/download.webp'

import "../css/contact.css"

const Contact = () => {
    return (
        <>
            <h1 className="CONTACT">CONTACT</h1>
            <p className="CONTACT">Fan? Drop a note!</p>
            <li className="li">
                 Chicago, US
            </li > 
            <li className="li">
                Phone: +00 151515
            </li>
            <li className="li">
                Email: mail@mail.com</li>
                <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
        
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
        
        <Form.Control
          placeholder="Email"
          aria-label="Email"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      

     
  
    
     
  
    

  
      <InputGroup>
        <InputGroup.Text>With textarea</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup><br></br>
      <Button variant="primary" className="btn">Send</Button>

<img  src={img} className="img"></img>

<img  src={image} ></img>



    </>


        
    )
}
export default Contact