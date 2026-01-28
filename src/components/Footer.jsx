import React from 'react';
import '../css/footer.css'
import insta from '../pict/insta.svg'
import linkedIn from '../pict/linkedIn.svg'
import telegram from '../pict/telegram.svg'
import facebook from '../pict/facebook.svg'

import '../css/footer.css'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__links">
                    <ul>
                        <li><a href="#"><img src={insta} alt="Image" /></a></li>
                        <li><a href="#"><img src={linkedIn} alt="Image" /></a></li>
                        <li><a href="#"><img src={telegram} alt="Image" /></a></li>
                        <li><a href="#"><img src={facebook} alt="Image" /></a></li>
                    </ul>
                </div>
                <div className="footer__adres">
                    <p>вул. Глибочицька 17, оф. 314, Київ, Україна 2025</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
