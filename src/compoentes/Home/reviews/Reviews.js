import React, { useEffect, useState } from 'react';
import Review from './review/Review';

const Reviews = () => {
    const [reviews,setReviews]=useState([])
     useEffect(()=>{
         fetch('ReviewData.json')
 .then(res=>res.json())
 .then(data=>
 setReviews(data))
     },[])

    return (
        <div className="container">
        <h2 className='text-center mt-3 p-auto'>This is some clients and their mark on the farm</h2>
  
  <div className="row m-auto p-4 ">
        {reviews.map(review=><Review key={review.id} review={review}></Review>)}
        
      </div>
      </div>
    );
};

export default Reviews;