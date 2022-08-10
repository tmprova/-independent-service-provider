import React from 'react';
// import pic from '../../../assets/About/mypic.jpg'
// import img3 from '../../../../assets/Banner/banner3.png'
import pic from "../../assets/About/mypic.jpg"
const About = () => {
    return (
        <div>
            <h1>this is about us</h1>
            <img className='border border-radius ' src={pic}/>
        </div>
    );
};

export default About;