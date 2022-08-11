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
          <p></p>
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
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Banner;