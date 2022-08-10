import React from 'react';
import { Card } from 'react-bootstrap';

const Review = (params) => {
    const {name,img,ratings,comments}=params.review
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
              <Card.Title>Client:{name}</Card.Title>
              <Card.Text>{comments}</Card.Text>
              <p>
                ratings:{ratings}
              </p>
              
            </Card.Body>
          </Card>
        </div>
      </div>
    );
};

export default Review;