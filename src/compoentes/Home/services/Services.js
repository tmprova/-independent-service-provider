import React, { useState } from "react";
import Service from "../service/Service";
import jail from '../../../assets/ServicePic/close-jail.jpg'
import document from '../../../assets/ServicePic/document.jpg'
import lawSuit from '../../../assets/ServicePic/law-suit.jpg'

 const services = [
    {
      id: 1,
      name: "bailout",
      img: jail,
      description:
        "you get caught on a tight spot??we are here to bail you out!know that it is in your legal right.",
        price:500,
    },
    {
      id: 2,
      name: "contract valivation",
      img: document,
      description:
        "if you are wondering,how's your new contract;if it's valid in eyes of law!we can definitly help you out",
        price:300,
    },

    {
      id: 3,
      name: "civil lawsuit",
      img: lawSuit,
      description:
        "having trouble with neighborhs?your properties are at stake?you know now,who to call!!",
        price:800,
    },
  ];

const Services = () => {
 const [service,setService]=useState([]);
  return (
    <div className="container">
      <h2 className='text-center mt-3 p-auto'>Services</h2>

<div className="row m-auto p-4 ">
      {services.map(service=><Service key={service.id} service={service}></Service>)}
      
    </div>
    </div>

  );
};

export default Services;
