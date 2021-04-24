import React from 'react';
import './Footer.css';



function Footer() {
    return (
        <div className='footer'>
            <div className="footer__left">
                <h1>Album and Song details</h1>
            </div>

            <div className="footer__center">
                <h1>Player control</h1>
            </div>

            <div className="footer__right">
                <p>Volume</p>
            </div>
        </div>
    )
}

export default Footer
