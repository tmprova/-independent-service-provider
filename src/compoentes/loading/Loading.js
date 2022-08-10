import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height:'550px'}} className="w-100 d-flex justify-content-center align-items-center">
            <Spinner animation='border' varient="info"/>
        </div>
    );
};

export default Loading;