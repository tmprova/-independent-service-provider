import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className="p-2 text-info ">
            <div className="d-flex justify-content-between align-items-center">
            <p>all rights reserved</p>          
            <p>© lawyer's petition </p>
            <p>@{year} </p>
            </div>
        </div>
    );
};

export default Footer;