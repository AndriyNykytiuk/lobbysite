import React from 'react'
import arrow from '../pict/Arrow_3.svg'
import '../css/aboutus.css'
import { Link } from 'react-router-dom'
const AboutUs = () => {
    return (
        <div className='about__us'>

            <div className="about-us-top">
                <div className="who-we-are">
                    <h3>хто ми ?</h3>
                    <p>Наша основна місія, основні напрямки,
                        мета до якої ми прагнемо.</p>
                    <Link to='/about/who-we-are'><img src={arrow} alt="arrow" /></Link>
                </div>
                <div className="participants">
                    <h3>члени організації</h3>
                    <p>Наша організація має більше 300
                        висококваліфікованих спеціалістів.</p>
                    <Link to="/about/membership"><img src={arrow} alt="arrow" /></Link>
                </div>
            </div>
            <div className="about-us-bottom">
                <div className="ceo">
                    <h3>члени правління</h3>
                    <p>Наша організація має більше 300
                        висококваліфікованих спеціалістів.</p>
                    <Link to="/about/membership" className='police-btn'>
                        <img src={arrow} alt="arrow" /></Link>
                </div>
                <div className="police">
                    <h3>Кодекс етики</h3>
                    <p>Наша організація має більше 300
                        висококваліфікованих спеціалістів.</p>
                    <Link to="/about/ethic-police" className='police-btn'><img src={arrow} alt="arrow" /></Link>
                </div>
            </div>


        </div>
    )
}

export default AboutUs
