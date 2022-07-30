import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../assets/Banner/banner1.png'
import img2 from '../../../assets/Banner/banner2.png'
import img3 from '../../../assets/Banner/banner3.png'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <div className="">
             <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 h-auto"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>KNOWLEDGE</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-auto"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>RESPONSIBILITY</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-auto"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>JUSTICE</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Banner;