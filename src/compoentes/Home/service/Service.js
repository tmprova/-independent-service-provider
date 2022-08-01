import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Service = (props) => {
    
    const {name,img,description,price}=props.service;
    return (
        <div>
            
            <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
        <p>fee's:${price}<small>per hour</small></p>
        <Button variant="primary">contact us now</Button>
      </Card.Body>
    </Card>
            </div>
        </div>
    );
};

export default Service;