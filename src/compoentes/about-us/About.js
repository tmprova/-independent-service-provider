import React from 'react';
// import pic from '../../../assets/About/mypic.jpg'
// import img3 from '../../../../assets/Banner/banner3.png'
import pic from "../../assets/About/mypic.jpg"
const About = () => {
    return (
        <div>
            <img className='border border-radius rounded' src={pic} alt=''/>
            <div className='card w-25 mx-auto rounded'>
  <h5 className='card-header'>Tanver Mokammel</h5>
  <div className='card-body'>
    <h5 className='card-title'>im trying to understand this era thourgh it's language.Thus i choose to be a web-developer trainee..I hope some day,i would become a good programmer.</h5>
    <hr/>
    <p className='card-text'>my biggest downfall is my inconstancy of work and lack of Discipline..im trying rather hard to get rid of it..But,im still trying. </p>
    
  </div>
</div>
        </div>
    );
};

export default About;