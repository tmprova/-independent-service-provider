import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";

const Service = (props) => {
  const { name, img, description, price } = props.service;
  const navigate = useNavigate()
  
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 "> 
      <div className="">
        <Card className="" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={img}
            style={{ width: "auto", height: "300px" }}
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <p>
              fee's:${price}
               <small>per hour</small>
            </p>
            <Button onClick={() => navigate('/checkout')} variant="primary">
              contact us now
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Service;
